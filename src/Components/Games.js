import React from "react";
import "./Styles/Games.css"
import { Container} from "react-bootstrap"


const Games = () => {
    return(
        <div id="games" className="games-news">
            <h1 className='game-head'>to the world of games</h1>
            
                 <div className="game-1">
                     <h2 className='game-name'>12 Minutes</h2>
                    <p className="game-des">
                      <img alt='game' className="game-img" src={ require("../Images/Games/12-minutes.jpg").default } />
                         Nomada's interactive thriller 12 Minutes has firmly been on our radar since the 
                         studio debuted a trailer at E3 2019. You play as a husband who's stuck in a 12 minute
                         time-loop. A romantic evening with your wife quickly turns into a nightmare when a
                         police officer breaks into your house and accuses your wife of murder.
                         Suddenly you're returned to the moment before everything unfolded, and as you 
                         go through each time-loop, you have to work to change your fate and break 
                         the loop once and for all. Taking inspiration from The Shining, Memento, 
                         and Rear Window, it's easily one of the most interesting indie titles to look 
                         forward to in 2020.
                    </p>
                    <p> Platform's: PC, Xbox One </p>
                    <p>Release date: August 19, 2021</p>
                 </div>
                 <div className="game-2">
                     <h2 className='game-name'>Back 4 Blood</h2>
                    <p className="game-des">
                      <img alt='game' className="game-image" src={ require("../Images/Games/Back.jpg").default } />
                        Left 4 Dead 3 in all but name, Back 4 Blood is the same four-player co-op
                         zombie experience that you'd expect from the Valve series - just without the 
                         Valve involvement. We dove into the game's recent alpha and can confirm it 
                         has the same frantic energy as the Left 4 Dead games, the humor, distinctive
                          style, and of course, lots and lots of zombies. It's going to be beautiful chaos. 
                    </p>
                    <p> Platform's: PS4, PS5, Xbox One, Xbox Series X, PC </p>
                    <p>Release date: October 12, 2021</p>
                 </div> 
                 <div className="game-3">
                     <h2 className='game-name'>Marvel's Guardians of the Galaxy</h2>
                    <p className="game-des">
                      <img alt='game' className="game-img" src={ require("../Images/Games/Gog.jpg").default } />
                      Eidos Montreal is bringing us a brand new Marvel game in the form of
                      Marvel's Guardians of the Galaxy. You'll be playing as Star-Lord, leading the 
                      Guardians as they try to save the universe from a problem of their own (accidental) 
                      creation. While you play solely as Star-Lord, you'll have to make decisions for the team, 
                      and will be able to command them in battle too. Plus, it's all set to a suitably amazing 80s 
                      soundtrack.
                    </p>
                    <p> Platform's: Xbox Series X, PS5, PS4, Xbox Series X, Xbox One, PC </p>
                    <p>Release date: October 26, 2021</p>
                 </div>   
                 <div className="game-4">
                     <h2 className='game-name'>Life is Strange: True Colors</h2>
                    <p className="game-des">
                      <img alt='game' className="game-image" src={ require("../Images/Games/Life.jpg").default } />
                      Life is Strange: True Colors is the latest entry in the graphic adventure series, 
                      brought to you by Deck Nine (the team behind Life is Strange: Before the Storm). 
                      This story follows Alex Chen, a young woman with a troubled background of foster homes, 
                      who reunites with her brother only for him to be killed in a mysterious accident. 
                      She'll use her psychic empathy powers to read and manipulate others' emotions, 
                      in order to investigate the truth behind her brother's death.  
                    </p>
                    <p> Platform's: PS5, PS4, PC, Xbox Series X, Xbox One, Stadia </p>
                    <p>Release date: September 10, 2021</p>
                 </div> 
                 <div className="game-5">
                     <h2 className='game-name'>Psychonauts 2</h2>
                    <p className="game-des">
                      <img alt='game' className="game-img" src={ require("../Images/Games/Psychonauts.jpg").default } />
                      The original Psychonauts is the kind of cult classic that's beloved by all who play it, 
                      and it set the tone for all of Double Fine's following games: fun, quirky, imaginative, 
                      and relentlessly clever. Now, after over a decade since the debut of their first 
                      adventure at Whispering Rock Psychic Summer Camp, Raz, Lili, and elite members of the 
                      Psychonauts are back for another mind-delving, 3D platforming adventure. 
                      Picking up where the PSVR-exclusive Rhombus of Ruin left off, Psychonauts 2 promises 
                      more whimsical, vibrant mental mindscapes to explore as Raz runs and jumps around the 
                      inner thoughts of idiosyncratic, often hilarious characters. 
                    </p>
                    <p> Platform's: PC, Xbox One, PS4 </p>
                    <p>Release date: August 25, 2021</p>
                 </div>           
        </div>
    )
}

export default Games;