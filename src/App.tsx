import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app">
            <header className="header">
                <img
                    src="https://img.freepik.com/premium-vector/shaman-logo-mascot-esoteric-magic-sacred-icon-mystic-ethnic-illustration_139372-649.jpg?w=20"
                    alt=""/>
            </header>
            <nav className="nav">
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className="content">
                <div><img src="https://www.kartinki24.ru/uploads/gallery/main/196/kartinki24_ru_forest_224.jpg" alt=""/>
                </div>
                <div>
                    <div><img
                        src="https://65.mchs.gov.ru/uploads/resize_cache/news/2021-08-25/pravila-povedeniya-pri-vstreche-s-medvedem_1629847892112633638__800x800.jpg"
                        alt=""/></div>
                    <div>
                        <div>Sasha D.</div>
                        <div>Date of Birth: April 22</div>
                        <div>Сity: st.Petersburg</div>
                        <div>Unknown</div>
                        <div>Unknown</div>
                    </div>
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
