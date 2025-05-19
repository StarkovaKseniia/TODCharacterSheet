import React, { Component } from 'react';

const Cabinet = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Створені персонажі</h1>
            <div class="buttons">
                <button>Створити персонажа</button>
                <button>Створити папку</button>
                <button>Зберегти JSON</button>
            </div>
            <div class="characters">
                <div class="all">
                    <div class="character">
                        <a href="index.html">
                            <p id="name">Ім'я <span>1 рівень</span></p>
                            <p id="hp">Поточні ОЗ/Максимум</p>
                        </a>
                            <div class="dropdown-content">
                                <p>Зберегти JSON</p>
                                <p>Видалити</p>
                                <p>Додати до папки
                                    <div class="dropdown-content">
                                        <p>Назва папки</p>
                                        <p>AAA</p>
                                    </div>
                                </p>
                            </div>
                    </div>
                </div>
                <div class="folder">
                    <input type="checkbox" id="toggle1" class="unfolder"/> 
                    <label for="toggle1" class="toggle-label"><span class="unfold-icon">&#9654;</span><span class="fold-icon">&#9660;</span>Назва папки
                        <div class="dropdown-content">
                            <p>Зберегти JSON</p>
                        </div></label>          
                    <div class="fold">
                        <div class="character">
                            <a href="index.html">
                                <p id="name">Ім'я <span>1 рівень</span></p>
                                <p id="hp">Поточні ОЗ/Максимум</p>
                            </a>
                                <div class="dropdown-content">
                                    <p>Видалити з папки</p>
                                </div>
                        </div>
                    </div>
                    
                </div>
                <div class="folder">
                    <input type="checkbox" id="toggle2" class="unfolder"/> 
                    <label for="toggle2" class="toggle-label"><span class="unfold-icon">&#9654;</span><span class="fold-icon">&#9660;</span>ААА
                        <div class="dropdown-content">
                            <p>Зберегти JSON</p>
                        </div></label>          
                    <div class="fold">
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Cabinet;