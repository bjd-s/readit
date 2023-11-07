import { KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import Herojpg from '../assets/livres.png';

interface HeroProps {
	setSearch: (value: string | null) => void;
	setList: (value: boolean) => void;
}

export default function Hero({ setSearch, setList }: HeroProps) {
	return (
		<>
			<div className='hero'>
				<div className='left-part'>
					<p>Commencez votre voyage aujourd'hui</p>
					<h1>Chaque livre est une nouvelle aventure !</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Proin eget consectetur purus, sed ornare elit. Integer finibus eu elit ut luctus.
						Donec ac ligula sit amet ante malesuada iaculis. Nunc egestas sagittis egestas.
						Sed vitae feugiat metus. Aliquam vel dignissim felis, nec rutrum leo.
					</p>

					<div className='search'>
						<input
							className="input"
							type="text"
							placeholder="Recherche"
							onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
								if (e.key === 'Enter') {
									e.preventDefault();
									setList(true);
									setSearch(e.currentTarget.value);
								}
							}}
						>
						</input>
						<BsSearch />
					</div>
				</div>

				<div className='right-part'>
					<img src={Herojpg} className="" alt="Illustration livres" />
				</div>
			</div>
		</>
	);
}
