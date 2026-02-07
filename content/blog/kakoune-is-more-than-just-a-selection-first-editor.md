+++
date = '2026-02-07T09:22:01+07:00'
draft = false
title = 'Kakoune Is More Than Just A Selection-First Editor'
+++

this is a short post talking about the advantages of using kakoune beyond its selection-first editing.

kakoune is very adhereing to the unix philosphy. it has builtin pipe mechanism, where you can pipe your selection to another program and replace that selection with the output of the program.

for example, if you want to surround a selection with parens "(", you can just select the text, press `|`, then use this command `xargs -I_ echo '('_')'`.

for someone that uses the shell a lot, this workflow is very familiar.

another example that utilise piping is adding current date. in neovim, we can do similar thing by prepend the `date` command with `!.`, but that insert the output below the current line. in kakoune, because your cursor is considered as 1-char selection, you can just pipe that to `date` command and get the date written before the cursor. this might not seem a big deal, but the fact that kakoune intentionally implement this makes piping more clearer.

multi cursor. i dont know any benefit of this other than its better than a macro. i takes less key and less cognitive overload. for example, if you want to rename foo() to bar(), you can press `%` to select the whole buffer, then press `s` to start selecting with multiple cursor, type `foo` and all occurence of `foo` will be selected, then you can do any normal editing keybind to rename it. compare that to vim where you have to record a macro first, then execute it for all foo or use the ed syntax for subtitute `%s/foo()/bar()/g`, i think kakone is more clear.

other than all that, kakoune have builtin autocompletion, and its enabled by default (*neovim could never* (*or could it?*))


