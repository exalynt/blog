# blog

For all the blogging and writing for Exalynt.

Built with [Hugo](https://gohugo.io/) using the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

## Getting started

Clone with submodules (needed for the theme):

```sh
git clone --recurse-submodules <repo-url>
```

If already cloned without submodules:

```sh
git submodule update --init --recursive
```

## Local development

```sh
hugo server -D
```

Visit <http://localhost:1313/>.

## New post

```sh
hugo new content posts/my-post-title.md
```

## Build

```sh
hugo
```

Output goes to `public/`.
