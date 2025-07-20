/*
  @title   dont text dont call - say now / dj_dave
  @by      ValiShaby
*/

setcpm(120)

// Kick layers using same rhythm, different notes/gains
const kickPattern = "[x - - - x - - - x - - x - - x -]/4";

$: note(kickPattern).note(40).sound("rolandtr808_bd").gain(0.3);
$: note(kickPattern).note(30).sound("rolandtr808_bd").gain(1.5);
$: note(kickPattern).note(20).sound("rolandtr808_bd").gain(1)._punchcard();

// Bass melody
$: note("[50 52 45 48]/32").gain(.4).room(0.3).dur(8).sound("gm_drawbar_organ")._punchcard();

// Main melody
$: note("[72 71 71 71 72 74 74 74 74 74 72 72 72 71 71 71 72 74 76 76 76 76 72 72]/16").late(1/32).sound("gm_tremolo_strings").gain(0.6).room(1).decay(0.6).lpf(4000)._punchcard();
// Main melody support
$: note("[[72 71] 74 [72 71] 76]/16").sound("gm_voice_oohs").gain(0.15).room(0.3)._punchcard();

// High-hats
$: sound("hh*4").pan("[.3 .43 .63 .7 .63 .43]/8").gain(sine.range(.05, .08).slow(2));

// Clap
$: sound("[- cp]/2").gain(0.15).room(0.5);
