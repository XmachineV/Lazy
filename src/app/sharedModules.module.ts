import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

const sharedModules: any[] = [
    FormsModule
];
const declarations: any[] = [
    
];



@NgModule({
    imports: sharedModules,
    exports: sharedModules,
    declarations: declarations
})



export class SharedModule { }