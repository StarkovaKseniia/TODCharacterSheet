import React, { Component } from 'react';

const Sheet = () => {
    return (
        <div>
            <div id="downbutton">
                <button class="savechar noprofile">Зберегти персонажа</button>
            </div>
            <h1 class="message"> Перепрошуємо, застосунок ще не адаптований під розмір вашого екрану( </h1>
            <h1>Заповнюваний лист персонажа</h1>
            <form class="charactersheet">
                <div class="charinfo">
                    <div class="geninfo">
                        <div class="info">
                            <label for="charname">Ім'я персонажа</label>
                            <input name="charname" type="text"/>
                        </div>
                        <div class="info">
                            <label for="class">Клас</label>
                            <input name="class" type="text"/>
                        </div>
                        <div class="info">
                            <label for="subclass">Підклас</label>
                            <input name="subclass" type="text"/>
                        </div>
                        <div class="info">
                            <label for="background">Передісторія</label>
                            <input name="background" type="text"/>
                        </div>
                        <div class="info">
                            <label for="playname">Ім'я гравця</label>
                            <input name="playname" type="text"/>
                        </div>
                        <div class="info">
                            <label for="race">Раса</label>
                            <input name="race" type="text"/>
                        </div>
                        <div class="info">
                            <label for="heritage">Походження</label>
                            <input name="heritage" type="text"/>
                        </div>
                        <div class="info">
                            <label for="sizetype">Розмір і тип істоти</label>
                            <input name="sizetype" type="text"/>
                        </div>
                    </div>
                    <div class="level">
                        <label for="levelvalue">Рівень</label>
                        <input name="levelvalue" id="levelvalue" type="number" placeholder="1" min="1" max="20"/>
                    </div>
                </div>
                <div class="profbonus">
                    <label for="pb">Бонус Майстерності</label>
                    <input name="pb" id="pb" disabled/>
                </div>
                <div class="abilities">
                    <div class="ability">
                        <div class="abmodifier">
                            <label for="phymod">Міць</label>
                            <input name="phymod" id="phymod" placeholder="+0" class="stat" disabled/>
                            <div class="modifier">
                                <input name="physcore" id="physcore" placeholder="10" class="statscore" min="1" max="30" type="number"/>
                            </div> 
                        </div>
                        <div class="absave">
                            <div class="savemodifier">
                                <label for="physavemod">Ряткидок</label>
                                <input name="physavemod" id="physavemod" placeholder="+0" disabled/>
                            </div>
                            <div class="saveattr">
                                <div class="advdisadv">
                                    <input id="phyadv" class="adv" name="agiadv" type="checkbox" />
                                    <label for="phyadv"></label>
                                    <input id="phydisadv" class="disadv" name="agidisadv" type="checkbox" />
                                    <label for="phydisadv"></label>
                                </div>
                                <input id="phyprof" class="prof" name="physaveprof" type="checkbox" />
                                <label for="phyprof"></label>
                            </div>
                        </div>
                    </div>
                    <div class="ability">
                        <div class="abmodifier">
                            <label for="agimod">Спритність</label>
                            <input name="agimod" id="agimod" placeholder="+0" class="stat" disabled/>
                            <div class="modifier">
                                <input name="agiscore" id="agiscore" placeholder="10" class="statscore" min="1" max="30" type="number"/>
                            </div> 
                        </div>

                        <div class="absave">
                            <div class="savemodifier">
                                <label for="agisavemod">Ряткидок</label>
                                <input name="agisavemod" id="agisavemod" placeholder="+0" disabled/>
                            </div>
                            <div class="saveattr">
                                <div class="advdisadv">
                                    <input id="agiadv" class="adv" name="agiadv" type="checkbox" />
                                    <label for="agiadv"></label>
                                    <input id="agidisadv" class="disadv" name="agidisadv" type="checkbox" />
                                    <label for="agidisadv"></label>
                                </div>
                                <input id="agiprof" class="prof" name="agisaveprof" type="checkbox" />
                                <label for="agiprof"></label>
                            </div>
                        </div>
                    </div>
                    <div class="ability">
                        <div class="abmodifier">
                            <label for="minmod">Розум</label>
                            <input name="minmod" id="minmod" placeholder="+0" class="stat" disabled/>
                            <div class="modifier">
                                <input name="minscore" id="minscore" placeholder="10" class="statscore" min="1" max="30" type="number"/>
                            </div> 
                        </div>
                        <div class="absave">
                            <div class="savemodifier">
                                <label for="minsavemod">Ряткидок</label>
                                <input name="minsavemod" id="minsavemod" placeholder="+0" disabled/>
                            </div>
                            <div class="saveattr">
                                <div class="advdisadv">
                                    <input id="minadv" class="adv" name="agiadv" type="checkbox" />
                                    <label for="minadv"></label>
                                    <input id="mindisadv" class="disadv" name="agidisadv" type="checkbox" />
                                    <label for="mindisadv"></label>
                                </div>
                                <input id="minprof" class="prof" name="minsaveprof" type="checkbox" />
                                <label for="minprof"></label>
                            </div>
                        </div>
                    </div>
                    <div class="ability">
                        <div class="abmodifier">
                            <label for="wilmod">Воля</label>
                            <input name="wilmod" id="wilmod" placeholder="+0" class="stat" disabled/>
                            <div class="modifier">
                                <input name="wilscore" id="wilscore" placeholder="10" class="statscore" min="1" max="30" type="number"/>
                            </div> 
                        </div>
                        <div class="absave">
                            <div class="savemodifier">
                                <label for="wilsavemod">Ряткидок</label>
                                <input name="wilsavemod" id="wilsavemod" placeholder="+0" disabled/>
                            </div>
                            <div class="saveattr">
                                <div class="advdisadv">
                                    <input id="wiladv" class="adv" name="agiadv" type="checkbox" />
                                    <label for="wiladv"></label>
                                    <input id="wildisadv" class="disadv" name="agidisadv" type="checkbox" />
                                    <label for="wildisadv"></label>
                                </div>
                                <input id="wilprof" class="prof" name="wilsaveprof" type="checkbox" />
                                <label for="wilprof"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="luck">
                    <label for="lp">Удача</label>
                    <input name="lp" type="number" min="0" max="5"/>
                </div>
                <div class="skills">
                    <h2>Навички</h2>
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="acroadv" class="adv" name="acroadv" type="checkbox" />
                            <label for="acroadv"></label>
                            <input id="acrodisadv" class="disadv" name="acrodisadv" type="checkbox" />
                            <label for="acrodisadv"></label>
                        </div>
                        <input id="acroprof" class="prof" name="acrosaveprof" type="checkbox" />
                        <label for="acroprof"></label>
                        <input name="aromod" placeholder="+0"/>
                        <label for="aromod">Акробатика <span class="skillab">(СПР)</span></label>
                    </div>
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="investadv" class="adv" name="investadv" type="checkbox" />
                            <label for="investadv"></label>
                            <input id="investdisadv" class="disadv" name="investdisadv" type="checkbox" />
                            <label for="investdisadv"></label>
                        </div>
                        <input id="investprof" class="prof" name="investsaveprof" type="checkbox" />
                        <label for="investprof"></label>
                        <input name="investmod" placeholder="+0"/>
                        <label for="investmod">Аналіз <span class="skillab">(РОЗ)</span></label>
                    </div>
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="athladv" class="adv" name="athladv" type="checkbox" />
                            <label for="athladv"></label>
                            <input id="athldisadv" class="disadv" name="athldisadv" type="checkbox" />
                            <label for="athldisadv"></label>
                        </div>
                        <input id="athlprof" class="prof" name="athlsaveprof" type="checkbox" />
                        <label for="athlprof"></label>
                        <input name="athlmod" placeholder="+0"/>
                        <label for="athlmod">Атлетика <span class="skillab">(МІЦ)</span></label>
                    </div>
                    
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="perfadv" class="adv" name="perfadv" type="checkbox" />
                            <label for="perfadv"></label>
                            <input id="perfdisadv" class="disadv" name="perfdisadv" type="checkbox" />
                            <label for="perfdisadv"></label>
                        </div>
                        <input id="perfprof" class="prof" name="perfsaveprof" type="checkbox" />
                        <label for="perfprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Виступ <span class="skillab">(ВОЛ)</span></label>
                    </div>
                    
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="anhandadv" class="adv" name="anhandadv" type="checkbox" />
                            <label for="anhandadv"></label>
                            <input id="anhanddisadv" class="disadv" name="anhanddisadv" type="checkbox" />
                            <label for="anhanddisadv"></label>
                        </div>
                        <input id="anhandprof" class="prof" name="anhandsaveprof" type="checkbox" />
                        <label for="anhandprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Дресирування <span class="skillab">(ВОЛ)</span></label>
                    </div>
                    
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="insadv" class="adv" name="insadv" type="checkbox" />
                            <label for="insadv"></label>
                            <input id="insdisadv" class="disadv" name="insdisadv" type="checkbox" />
                            <label for="insdisadv"></label>
                        </div>
                        <input id="insprof" class="prof" name="inssaveprof" type="checkbox" />
                        <label for="insprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Емпатія <span class="skillab">(ВОЛ)</span></label>
                    </div>
                    
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="intimadv" class="adv" name="intimadv" type="checkbox" />
                            <label for="intimadv"></label>
                            <input id="intimdisadv" class="disadv" name="intimdisadv" type="checkbox" />
                            <label for="intimdisadv"></label>
                        </div>
                        <input id="intimprof" class="prof" name="intimsaveprof" type="checkbox" />
                        <label for="intimprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Залякування <span class="skillab">(ВОЛ)</span></label>
                    </div>
                    
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="arcadv" class="adv" name="arcadv" type="checkbox" />
                            <label for="arcadv"></label>
                            <input id="arcdisadv" class="disadv" name="arcdisadv" type="checkbox" />
                            <label for="arcdisadv"></label>
                        </div>
                        <input id="arcprof" class="prof" name="arcsaveprof" type="checkbox" />
                        <label for="arcprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Магія <span class="skillab">(РОЗ)</span></label>
                    </div>

                    <div class="skill">
                        <div class="advdisadv">
                            <input id="medadv" class="adv" name="medadv" type="checkbox" />
                            <label for="medadv"></label>
                            <input id="meddisadv" class="disadv" name="meddisadv" type="checkbox" />
                            <label for="meddisadv"></label>
                        </div>
                        <input id="medprof" class="prof" name="medsaveprof" type="checkbox" />
                        <label for="medprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Медецина <span class="skillab">(РОЗ)</span></label>
                    </div>
                    
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="decadv" class="adv" name="decadv" type="checkbox" />
                            <label for="decadv"></label>
                            <input id="decdisadv" class="disadv" name="decdisadv" type="checkbox" />
                            <label for="decdisadv"></label>
                        </div>
                        <input id="decprof" class="prof" name="decsaveprof" type="checkbox" />
                        <label for="decprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Обман <span class="skillab">(ВОЛ)</span></label>
                    </div>
                    
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="persadv" class="adv" name="persadv" type="checkbox" />
                            <label for="persadv"></label>
                            <input id="persdisadv" class="disadv" name="persdisadv" type="checkbox" />
                            <label for="persdisadv"></label>
                        </div>
                        <input id="persprof" class="prof" name="perssaveprof" type="checkbox" />
                        <label for="persprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Переконання <span class="skillab">(ВОЛ)</span></label>
                    </div>
                    
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="natadv" class="adv" name="natadv" type="checkbox" />
                            <label for="natadv"></label>
                            <input id="natdisadv" class="disadv" name="natdisadv" type="checkbox" />
                            <label for="natdisadv"></label>
                        </div>
                        <input id="natprof" class="prof" name="natsaveprof" type="checkbox" />
                        <label for="natprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Природа <span class="skillab">(РОЗ)</span></label>
                    </div>
                    
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="stealadv" class="adv" name="stealadv" type="checkbox" />
                            <label for="stealadv"></label>
                            <input id="stealdisadv" class="disadv" name="stealdisadv" type="checkbox" />
                            <label for="stealdisadv"></label>
                        </div>
                        <input id="stealprof" class="prof" name="stealsaveprof" type="checkbox" />
                        <label for="stealprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Прихованість <span class="skillab">(МІЦ)</span></label>
                    </div>
                    
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="tinkadv" class="adv" name="tinkadv" type="checkbox" />
                            <label for="tinkadv"></label>
                            <input id="tinkdisadv" class="disadv" name="tinkdisadv" type="checkbox" />
                            <label for="tinkdisadv"></label>
                        </div>
                        <input id="tinkprof" class="prof" name="tinksaveprof" type="checkbox" />
                        <label for="tinkprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Ремесло <span class="skillab">(РОЗ)</span></label>
                    </div>
                    
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="folkadv" class="adv" name="folkadv" type="checkbox" />
                            <label for="folkadv"></label>
                            <input id="folkdisadv" class="disadv" name="folkdisadv" type="checkbox" />
                            <label for="folkdisadv"></label>
                        </div>
                        <input id="folkprof" class="prof" name="folksaveprof" type="checkbox" />
                        <label for="folkprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Фолькльор <span class="skillab">(РОЗ)</span></label>
                    </div>
                    
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="percadv" class="adv" name="percadv" type="checkbox" />
                            <label for="percadv"></label>
                            <input id="percdisadv" class="disadv" name="percdisadv" type="checkbox" />
                            <label for="percdisadv"></label>
                        </div>
                        <input id="percprof" class="prof" name="percsaveprof" type="checkbox" />
                        <label for="percprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Уважність <span class="skillab">(РОЗ)</span></label>
                    </div>
                    
                    <div class="skill">
                        <div class="advdisadv">
                            <input id="slhandadv" class="adv" name="slhandadv" type="checkbox" />
                            <label for="slhandadv"></label>
                            <input id="slhanddisadv" class="disadv" name="slhanddisadv" type="checkbox" />
                            <label for="slhanddisadv"></label>
                        </div>
                        <input id="slhandprof" class="prof" name="slhandsaveprof" type="checkbox" />
                        <label for="slhandprof"></label>
                        <input name="mod" placeholder="+0"/>
                        <label for="mod">Хапкість рук <span class="skillab">(СПР)</span></label>
                    </div>
                </div>
                <div class="involvemen">
                    <div class="initiative">
                        <div class="initheader">
                            <div class="advdisadv">
                                <input id="initadv" class="adv" name="initadv" type="checkbox" />
                                <label for="initadv"></label>
                                <input id="initdisadv" class="disadv" name="initdisadv" type="checkbox" />
                                <label for="initdisadv"></label>
                            </div>
                            <label for="init">Ініціатива</label>
                        </div>
                        <input name="init" type="number"/>
                        <select name="initskill" id="initskills">
                            <option mod="perception">Уважність</option>
                        </select>
                    </div>
                    <div class="passskills">
                        <div class="passskill">
                            <label for="passperc">Пас. Уважність</label>
                            <input name="passpercmod" type="number"/>
                        </div>
                        <div class="passskill">
                            <div class="initheader">
                            <label for="passskill">Пас. </label>
                            <select name="passskill" id="passiveskills">
                                <option mod="perception">Уважність</option>
                            </select>
                            </div>
                            <input name="passskilmod" type="number"/>
                        </div>
                    </div>
                    <div class="speeds">
                        <label for="speeds">Швидкості</label>
                        <input name="speeds" type="text"/>
                    </div>
                    <div class="senses">
                        <label for="senses">Відчуття</label>
                        <input name="senses" type="text"/>
                    </div>
                </div>
                <div class="durability">
                    <div class="armorclass">
                        <h2>Захист</h2>
                        <div class="acvalue">
                            <div class="ac">
                                <label for="ac">КЗ</label>
                                <input name="ac" id="ac" type="number" min="5" disabled/>
                            </div>
                            <div class="shield">
                                <label for="shield">Щит</label>
                                <input name="shield" id="shieldval" type="number"/>
                                <input name="shieldison" id="shieldison" type="checkbox" />
                            </div>
                        </div>
                        <div class="armors">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Обладунок</th>
                                        <th>КЗ</th>
                                        <th></th>
                                    </tr>
                                <tr>
                                    <td><input type="text" name="armor1name" value="Неброньований"/></td>
                                    <td><input type="number" name="armor1ac"/></td>
                                    <td><input type="checkbox" name="armor1ison"/></td>
                                </tr>
                                <tr>
                                    <td><input type="text" name="armor2name"/></td>
                                    <td><input type="number" name="armor2ac"/></td>
                                    <td><input type="checkbox" name="armor2ison"/></td>
                                </tr>
                                <tr>
                                    <td><input type="text" name="armor3name"/></td>
                                    <td><input type="number" name="armor3ac"/></td>
                                    <td><input type="checkbox" name="armor3ison"/></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="resistance">
                        <label for="resistance">Опори</label>
                        <input name="resistance" type="text"/>
                    </div>
                    <div class="immunity">
                        <label for="immunity">Імунітети</label>
                        <input name="immunity" type="text"/>
                    </div>
                </div>
                <div class="lifecondition">
                        <div class="hitpoints">
                            <h2>Очки здоров'я</h2>
                            <div class="hps">
                                <div class="current">
                                    <label for="currenthp">Поточні</label>
                                    <input name="currenthp" id="currenthp" type="number"/>
                                </div>
                                <div class="temporary">
                                    <label for="temphp">Тимчасові</label>
                                    <input name="temphp" id="temphp" type="number" min="0"/>
                                </div>
                            </div>
                            <div class="maxlabel">
                                <label for="maxhp">Макс: </label>
                                <input name="maxhp" id="maxhp" type="number" min="1"/>
                            </div>
                        </div>
                        
                        <div class="hitdeath">
                            <div class="hitdice">
                                <h2>Кістки здоров'я</h2>
                                <input name="curhds" type="number" min="1"/> 
                                <div class="maxlabel">
                                    <label for="hdtype">Тип: </label>
                                    <select name="hdtype" id="hdtype">
                                        <option mod="d6">к6</option>
                                        <option mod="d6">к8</option>
                                        <option mod="d6">к10</option>
                                        <option mod="d6">к12</option>
                                    </select>
                                </div>
                            </div>
                            <div class="deathsaves">
                                <div class="dsheader">
                                    <div class="advdisadv">
                                        <input id="deathadv" class="adv" name="agiadv" type="checkbox" />
                                        <label for="deathadv"></label>
                                        <input id="deathdisadv" class="disadv" name="agidisadv" type="checkbox" />
                                        <label for="deathdisadv"></label>
                                    </div>
                                    <h2>Ряткидки смерті</h2>
                                </div>
                                <div class="marks">
                                    <div class="deathsuccesses">
                                        <div class="bubbles">
                                        <input id="deathsuccess1" class="prof" type="checkbox" />
                                        <label for="deathsuccess1"></label>
                                        <input id="deathsuccess2" class="prof" type="checkbox" />
                                        <label for="deathsuccess2"></label>
                                        <input id="deathsuccess3" class="prof" type="checkbox" />
                                        <label for="deathsuccess3"></label>
                                        </div>
                                        <label>Успіхи</label>
                                    </div>
                                    <div class="deathfails">
                                        <div class="bubbles">
                                        <input id="deathfail1" class="prof" type="checkbox" />
                                        <label for="deathfail1"></label>
                                        <input id="deathfail2" class="prof" type="checkbox" />
                                        <label for="deathfail2"></label>
                                        <input id="deathfail3" class="prof" type="checkbox" />
                                        <label for="deathfail3"></label>
                                        </div>
                                        <label>Провали</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="excon">
                            <div class="exhaustion">
                                <label for="exhaustion">Втома</label>
                                <input name="exhaustion" type="number" max="10" min="0"/>
                            </div>
                            <div class="concentration">
                                <label for="concentration">Концентрація</label>
                                <input name="concentration" type="text"/>
                            </div>
                        </div>
                        
                        <div class="conditions">
                            <label for="conditions">Стани</label>
                            <input name="conditions" type="text"/>
                        </div>
                </div>
            </form>
        </div>
    );
};

export default Sheet;