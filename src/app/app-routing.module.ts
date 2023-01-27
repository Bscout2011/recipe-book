import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipeResolver } from "./recipes/recipe-resolver.service";

import { RecipeItemComponent } from "./recipes/recipe-item/recipe-item.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-list/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { ShoppingListEditComponent } from "./shopping-list/shopping-list-edit/shopping-list-edit.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolver] },  // must come after any explicit routes like 'new'
        { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolver] },
    ]},
    { path: 'shopping-list', component: ShoppingListComponent, children: [
        { path: ':id', component: ShoppingListEditComponent}
    ] }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRountingModule {

}
