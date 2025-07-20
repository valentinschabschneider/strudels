/*
  @title   dont text dont call - say now / dj_dave
  @by      ValiShaby
*/

setcpm(120)

$: note("[40 - - - 40 - - - 40 - - 40 - - 40 -]/4").sound("rolandtr808_bd").gain(0.3);
$: note("[30 - - - 30 - - - 30 - - 30 - - 30 -]/4").sound("rolandtr808_bd").gain(1.5);
$: note("[20 - - - 20 - - - 20 - - 20 - - 20 -]/4").sound("rolandtr808_bd").gain(1)._punchcard();

$: note("[50 52 45 48]/32").gain(.4).room(0.3).dur(8).sound("gm_drawbar_organ")._punchcard();

$: note("[72 71 71 71 72 74 74 74 74 74 72 72 72 71 71 71 72 74 76 76 76 76 72 72]/16")
  //.sound("tri")
  .sound("gm_tremolo_strings")
  .gain(0.4).room(1).decay(0.6)._punchcard();
$: note("[[72 71] 74 [72 71] 76]/16").sound("gm_voice_oohs").gain(0.2).room(0.3)._punchcard();

$: sound("hh*4").pan("[.3 .43 .63 .7 .63 .43]/8").gain(sine.range(.05, .08).slow(2));

$: sound("[- cp]/2").gain(0.15).room(0.5);
