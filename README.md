# FooDev

## Instruction

- Create a new project that has routing file and sets `scss` as default stylesheet:
> ng new foodev --routing=true --style=scss

- Skip all test file:
  - Open angular.json file:
  
```json
{
  "schematics": {
    "@schematics/angular:component": {
      "style": "scss",
      "skipTests": true
    }
  }
}
```

## Create Components:
1. Header:
   - Logo
     - The text with the link to home screen and this router link allows you to go different roads on the client-side 
   - Login item
   - User menu
   - Cart item with the badge on the right of it

2. List of food
   - Create share folder: Share between components and services
     - Create model folder
   - Create Food model: Holds the structure of the food
   - Create data.ts
     - Add sample foods
   - Add images to assets
   - Create Food service:
     - Provide the data for home component:
     > ng g s services/food
   - Create Home Component
     - Add ts, html, css
   - Add ng-starrating package

3. Search bar
   - Add search method to Food service
   - Add search route
   - Show search result in Home component
   - Generate search component
     - Add to home component
     - Add ts, html, css

4. Tags Bar
   - Create Tag model
   - Add sample tags to data.ts
   - Food service
     - Add get all tags method
     - Add get all foods by tag method
   - Add tags route
   - Show tag result in Home component
   - Generate Tags component
     - Add to home component
     - Add ts, html, css
5. a
