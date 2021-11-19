let tigger = { character: "Tigger" };
let pooh = { character: "Winnie the Pooh" };
let piglet = { character: "Piglet"};
let kid = { character: "Christopher Robin" };
let bees = { character: "Bees" };
let rabbit = { character: "Rabbit" };
let owl = { character: "Owl" };
let eeyore = { character: "Eeyore" };
let heffalumps = { character: "Heffalump" };
let kanga = { character: "Kanga" };
let gopher = { character: "Gopher" };


tigger.north = pooh; 
pooh.south = tigger;

kid.south=tigger.north;
tigger.north.north = kid;

kanga.south=tigger.north.north;
tigger.north.north.north=kanga;

eeyore.south=tigger.north.north.north;
tigger.north.north.north.north=eeyore;


piglet.east = tigger.north;
tigger.north.west = piglet;

owl.east=tigger.north.north;
tigger.north.north.west=owl;
owl.south=tigger.north.west;
piglet.north=tigger.north.north.west;


bees.west = tigger.north;
tigger.north.east = bees;

rabbit.west=tigger.north.north;
tigger.north.north.east=rabbit;
rabbit.south=tigger.north.east;
bees.north=tigger.north.north.east;

gopher.west=tigger.north.north.east;
tigger.north.north.east.east=gopher;
heffalumps.west=tigger.north.north.north.north;
tigger.north.north.north.north.east=heffalumps;