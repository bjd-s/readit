interface BookListProps {
	item: {
		title: string;
		description: string;
		imageLinks: {
			thumbnail?: string | undefined;
		};
	};
}

export default function BookList({ item }: BookListProps) {
	const truncate = (str: string) =>
      str?.length > 150 ? `${str.substring(0, 150)}...` : str;

	return (
		<div className="books-card">
			<p>{item.title}</p>

			<div className="books-info">
				{item.imageLinks?.thumbnail && (
					<figure>
						<img src={item.imageLinks.thumbnail} alt={item.title} />
					</figure>
				)}

				{item.description && (
					<p>{truncate(item.description)}</p>
				)}
			</div>
		</div>
	);
}