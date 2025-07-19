/*
  @title   dont text dont call - say now / dj_dave
  @by      ValiShaby
*/

setcpm(120)

$: note("[40 - - - 40 - - - 40 - - 40 - - 40 -]/4").sound("rolandtr808_bd").gain(0.3);
$: note("[30 - - - 30 - - - 30 - - 30 - - 30 -]/4").sound("rolandtr808_bd").gain(2);
$: note("[20 - - - 20 - - - 20 - - 20 - - 20 -]/4").sound("rolandtr808_bd").gain(1)._punchcard();

$: note("[50 52 45 48]/32").dur(8).sound("sine")._punchcard();

$: note("[72 71 71 71 72 74 74 74 74 74 72 72 72 71 71 71 72 74 76 76 76 76 72 72]/16").sound("tri").gain(0.5).room(1).decay(0.6)._punchcard();
$: note("[[72 71] 74 [72 71] 76]/16").sound("sine").gain(0.2).room(0.3)._punchcard();

$: sound("hh*4").pan("[.3 .43 .63 .7 .63 .43]/8").gain(sine.range(.05, .08).slow(2));

$: sound("[- cp]/2").gain(0.15).room(0.5);
