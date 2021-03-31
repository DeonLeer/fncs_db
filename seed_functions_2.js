const playersArray = [ 'BBG Kreozard',
'sprite dabdabdba',
'C9 Avery',
'gаbeski',
'TUEXY',
'Cоmmandment',
'Fryst C9',
'NRG Edgey',
'FaZe Cented',
'PURE OSP7',
'Chimpま',
'twitter breadfn_',
'bully bully 39',
'SEN ZYFA 地',
'noob teyo',
'NRG ZAYT',
'Tabnae',
'TrainH saffy',
'nut 1300',
'Marzz_Ow',
'Liquid ЅТRETCН',
'LG Slackes',
'O zir vo',
'skqttles',
'Speguu',
'Cаzz',
'Liquid Riversan',
'XTRA Mero7',
'ENDL8SS DEYYRITO',
'ENDLESS Reverse',
'9LIVES Crumble',
'XTRA Illest',
'Avivv Yt',
'Trаshу',
'Justicе.',
'FS Ajerss',
'OUTCAST GOKU YT',
'C9 nosh',
'Twitch Vedfn',
'Pxlarized',
'XnBǃ',
'lеo 18',
'Snakeccept',
'Elite frat',
'LG Xoonies',
'XSET Shark',
'npen',
'XSET Knight',
'FS Degen',
'G2 Jаhq',
'1P Acornski',
'9LIVES Lazar',
'XSET Av',
'EP PAPE',
'A1 Silverback',
'divine ح',
'LG Jampеr ψ',
'A1 Ace1xx 〆',
'TNA ZLEM 3939',
'Elitе Crunchy',
'narwhаl',
'atomsG',
'twitter hctans',
'XPRT Domski',
'SEN Aspect.',
'yt duskyiwnl',
'Userz .',
'Dictate',
'CrackedNL',
'XPRT Equitz',
'Рrеdator',
'FаZe Bizzle',
'BBG Khanasty',
'G2 MackWood',
'NRG СІіх',
'SEN BUGHA 父',
'HIGHGROUND KІNG7',
'sto',
'Xen Squish7',
'steanzz',
'Сlamps',
'Mali Fan Adrian',
'chay5e',
'Noob Arkive',
'HunttCakee',
'Dukﱞe',
'Chap -α-',
'TRNL Threats',
'ENDLESS Pandush',
'c0dgenesis',
'9LIVES VOIL',
'KNG Nexy',
'BBG Bucke',
'SEN Animal',
'The Uzі',
'Cеicе',
'FS notpandda',
'DT Rise',
'tаhi',
'Unknown' ]


const trioString = ` 1
ENDL8SS DEYYRITOXTRA Mero7ENDLESS Reverse
54	12	25m 59s
 2
narwhаlElitе CrunchyTNA ZLEM 3939
33	4	25m 59s
 3
9LIVES CrumbleKNG NexyMarzz_Ow
36	8	25m 56s
4
LG Slackes1P AcornskiG2 Jаhq
38	12	25m 52s
5
FS DegenFS Ajerssskqttles
25	6	25m 41s
6
SEN ZYFA 地nut 1300TUEXY
30	9	25m 37s
7
Elite fratSnakecceptPxlarized
27	8	24m 4s
8
SEN Aspect.LG Xooniesnpen
20	5	24m 45s
9
XSET KnightXSET SharkXSET Av
17	4	24m 44s
10
PURE OSP7bully bully 39Fryst C9
22	7	23m 25s
11
BBG BuckeBBG KhanastyG2 MackWood
11	2	23m 17s
12
NRG СІіхSEN BUGHA 父FаZe Bizzle
10	2	23m 8s
13
c0dgenesis9LIVES VOILENDLESS Pandush
23	9	23m 58s
14
РrеdatorXPRT EquitzHunttCakee
8	2	21m 16s
15
lеo 18Twitch VedfnXnBǃ
3	0	21m 5s
16
SpeguuOUTCAST GOKU YTJusticе.
6	2	20m 58s
17
Avivv YtTrаshуDT Rise
3	1	20m 56s
18
A1 Ace1xx 〆A1 Silverbackdivine ح
0	0	20m 55s
19
NRG ZAYTTrainH saffyLiquid ЅТRETCН
0	0	20m 46s
20
noob teyoChimpまTabnae
2	1	19m 57s
21
LG Jampеr ψC9 noshEP PAPE
0	0	19m 34s
22
XPRT Domskiyt duskyiwnlO zir vo
0	0	16m 36s
23
CеicеSEN AnimalThe Uzі
2	1	15m 18s
24
Liquid RiversanCаzz9LIVES Lazar
0	0	15m 6s
25
FS notpanddaXen Squish7sto
0	0	15m 0s
26
BBG KreozardXTRA IllestC9 Avery
0	0	14m 8s
27
chay5esteanzzCrackedNL
0	0	14m 48s
28
atomsGtwitter breadfn_twitter hctans
0	0	14m 31s
29
HIGHGROUND KІNG7DictateUserz .
0	0	13m 26s
30
CоmmandmentFaZe CentedNRG Edgey
0	0	12m 43s
31
DukﱞeTRNL ThreatsChap -α-
0	0	7m 49s
32
Mali Fan AdrianNoob ArkiveСlamps
2	1	6m 4s
33
gаbeskitаhisprite dabdabdba
0	0	2m 14s`

let splitString = trioString.split('\n')
let trioArray = []
let num = 1 
while (num < splitString.length) {
  trioArray.push(splitString[num])
  num = num + 3
}
let trioObjectArray = []

for (let trio of trioArray) {
  let trioPlayers = []
  let count = 1
  for (let player of playersArray) {
    if (trio.includes(player)) {
      trioPlayers.push(count)
    }
    count++
  }
  let tempObj = {
    p1: trioPlayers[0],
    p2: trioPlayers[1],
    p3: trioPlayers[2]
  }
  trioObjectArray.push(tempObj)
}


let trioSeedString = ``

for (let trio of trioObjectArray) {
  console.log(trio)
  let p1 = trio.p1
  let p2 = trio.p2
  let p3 = trio.p3
  trioSeedString = trioSeedString.concat(`INSERT INTO trios(player1_id, player2_id, player3_id) VALUES(${p1}, ${p2}, ${p3});
  `)
}
console.log(trioSeedString);

