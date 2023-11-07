import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import Header from './Header';
import Hero from './Hero';
import BookList from './BookList';

declare module 'axios' {
    export interface AxiosResponse<T = any> {
        data: T;
    }
}

interface BookItem {
    id: string;
    volumeInfo: {
        title: string;
    };
}

export default function Home() {
    const [bookData, setBookData] = useState<BookItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [search, setSearch] = useState<string | null>(null);
    const [list, setList] = useState<boolean>(false);

    useEffect(() => {
        async function getData() {
            try {
                const response: AxiosResponse = await axios.get(
                    'https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyB0INEANQCaqujuUyzPi2ITJ82OFKU-Tq4' + '&maxResults=20'
                );
                setBookData(response.data.items);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [search, list]);

    return (
        <>
            <Header />

            <Hero
                setSearch={setSearch}
                setList={setList}
            />

            <div className='books'>
                {list ? (
                    bookData.map((item) =>
                        <BookList key={item.id} item={item.volumeInfo} />
                    )
                ) : ('')}
            </div>
        </>
    );
}
