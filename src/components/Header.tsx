import React from 'react';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
	return (
		<header>
			<span>Readit</span>

			<div className='head'>
				<ul>
					<li>
						<a href='#'>Accueil</a>
					</li>

					<li>
						<a href='#'>Compte</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;