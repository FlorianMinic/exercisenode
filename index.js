import 'dotenv/config';
import cowsay from 'cowsay';

console.log(cowsay.say({
    text : `My name is ${process.env.DB_NAME}, from ${process.env.DB_CAMPUS}`,
    e : "oO",
    T : "U "
}));
