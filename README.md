<h1>This is our goto-israel site project</h1>

<hr>

<h2>Suggested files structure</h2>

<pre>
..
/design    Let's put all our design assets here (adobe working projects, pictures, sketches, e.t.c) 

/www       Our target site space. (prd branch)       

	--> /img
	--> /css
	--> /sass
	--> /js
	--> index.html
README.md

</pre>


<h2> Sass structure </h2> 

<pre>
sass/
|
|-- modules/              # Common modules
|   |-- _all.scss         # Include to get all modules
|   |-- _utility.scss     # Module name
|   |-- _colors.scss      # Etc...
|   ...
|
|-- partials/             # Partials
|   |-- _base.scss        # imports for all mixins + global project variables
|   |-- _buttons.scss     # buttons
|   |-- _figures.scss     # figures
|   |-- _grids.scss       # grids
|   |-- _typography.scss  # typography
|   |-- _reset.scss       # reset
|   ...
|
|-- vendor/               # CSS or Sass from other projects
|   |-- 
|   |-- 
|   ...
|
`-- main.scss            # primary Sass file

</pre>
