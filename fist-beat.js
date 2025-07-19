$: note("[36 34 41 39]/4").sound("gm_acoustic_bass").pianoroll();

$: sound("bd bd rim bd bd - rim -").room(.5).gain(.7);

$: sound("hh*8");
//$: sound("hh*16");

$: note("[ - - - - - 36 39 41 43 41 39 41 - - 36 39]/2").sound("piano1").gain(1.3).decay(.5).delay(.5)._punchcard()

//$: note("[ - - - - - 36 39 41 43 41 39 41 - - 46 43]/2").sound("piano1").gain(1.3).decay(.5).delay(.5)._punchcard();

//$: note("[ - 39 39 44 42 40 39 40 39 - ]/2").sound("gm_trumpet").gain(1.1).decay(.8)._punchcard();