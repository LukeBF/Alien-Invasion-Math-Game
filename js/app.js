function main()
{
   


    window.onload = function()
    {
        const name = document.cookie;
        
        const playerName = document.querySelector('#player_name');
        
        const welcomeDiv = document.querySelector("#welcome_player");

        welcomeDiv.innerHTML = `Welcome to the game ${playerName}`

    }

    
   
}
main();