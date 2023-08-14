require('dotenv').config();
const { REST,Routes } = require('discord.js');

const commands= [
    {
        name: 'hey',
        description: 'Replies with hey',
    },
];
const rest = new Rest({version: '10'}).setToken(process.env.TOKEN);

(async() =>{
    try{
        await.rest.put(
            Routes.applicationGuildCommand(process.env.CLIEND_ID,process.),
            
        )
    }catch(error){
        console.log(`There was an error : ${error}`)
    }
})();
