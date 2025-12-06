+++
date = '2025-12-06T10:27:30+07:00'
draft = true
title = 'Setting Up Treesitter For Neovim Without Plugin'
+++

*this guide assumes that you already have the treesitter parser or know how to build the treesitter parser. if you dont, i suggest you to read the treesitter docs*

## Setting up the parser
to make Neovim recognise the parser, you need to place it in the `{nvim_runtime_path}/parser/{lang}.so`.
`nvim_runtime_path` is one of the following:
- `$XDG_CONFIG_HOME/nvim/`
- `$XDG_DATA_HOME/nvim/site`
the config_home and data_home is typically in `~/.config/` and `~/local/share/` respectively.

you can place it in either directory, the only difference is that the config directory will be sourced first. i suggest to put it in the local/share directory because thats what everyone do.

so for example if you have treesitter markdown parser, the path would be like this `~/.local/share/nvim/site/parser/markdown.so`

now that the parser has been set up, we need to set the queries files to get syntax highlighting to work.

## Setting up syntax highlighting

the queries is basically a rule for syntax highlighting (similar to css if you know that). the [nvim-treesitter] plugin provides good written queries that we can use. navigate to the `queries` folder in the github repo and find the language that you want, then you can download it and put it to the path.

the path for the queries is `{nvim_runtime_path}/queries/{lang}/`. notice that the `{lang}` is a directory, not a file. inside this directory is where you put the queries files.

after you do that, you can activate the syntax highlighting using this command `:lua vim.treesitter.start()`. make sure the buffer filetype is correct, if not, you can set it with `:set ft={lang}`.

to start the treesitter automatically, you can make autocmd or put the previous lua code in `ftplugin/`. i personally like putting it in ftplugin.
```lua
-- ~/.config/nvim/ftplugin/{lang}.lua
vim.treesitter.start()
```

## More info
if you have problem after following this guide, its best to consult the neovim docs `:h treesitter`, `:h runtimepath`, `:h ftplugins`.   
to build the treesitter parser, you can read the [https://tree-sitter.github.io/tree-sitter/creating-parsers/1-getting-started.html#getting-started](treesitter docs)
