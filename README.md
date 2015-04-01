# training_amd
Training repository for teaching about js modules, loaders, AMD, requirejs, etc...

## Setup/build

1. clone the repo:

    git clone https://github.com/joshball/training_amd.git
    
2. Install your npm package(s):
    
    npm install
    
3. Run the server 
    
   node server
   
### Notes

Also, these are static files, so you can use webstorm or any static file server to serve.

### Switching branches

To switch branches:


#### List your branches (note the * on your current branch)
    >git branch
      examples/bad
      examples/steps
      examples/xmd
      exercises/01
    * master
    
    >git status
    On branch master
    ...

#### To checkout a branch

    >git checkout exercises/01
    Switched to branch 'exercises/01'
    Your branch is up-to-date with 'origin/exercises/01'.
    
    >git branch
      examples/bad
      examples/steps
      examples/xmd
    * exercises/01
      master

#### Save your work before switching branches.

    > git add .
    > git commit -m "message"
    
#### Don't want your work??? Confused. Just get me back to the branch!

    > git reset --hard
    

    

## References

#### Essential Design Patterns
 http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

#### Eloquent JavaScript Modules chapter 
 http://eloquentjavascript.net/10_modules.html
 
#### JavaScript Module Pattern: In-Depth
 http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

#### Writing Modular JavaScript With AMD, CommonJS & ES Harmony
 http://addyosmani.com/writing-modular-js/
