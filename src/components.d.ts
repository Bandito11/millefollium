/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppRecipeDaily {
        "calories": number;
        "image": string;
        "name": string;
    }
    interface AppRecipeFavorite {
    }
    interface AppRecipeInfo {
    }
    interface AppRecipeList {
    }
    interface AppRecipeRatings {
        "canEdit": boolean;
        "ratings": number;
    }
    interface AppRoot {
    }
    interface AppUserProfile {
    }
    interface AppViewFood {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRecipeDailyElement extends Components.AppRecipeDaily, HTMLStencilElement {
    }
    var HTMLAppRecipeDailyElement: {
        prototype: HTMLAppRecipeDailyElement;
        new (): HTMLAppRecipeDailyElement;
    };
    interface HTMLAppRecipeFavoriteElement extends Components.AppRecipeFavorite, HTMLStencilElement {
    }
    var HTMLAppRecipeFavoriteElement: {
        prototype: HTMLAppRecipeFavoriteElement;
        new (): HTMLAppRecipeFavoriteElement;
    };
    interface HTMLAppRecipeInfoElement extends Components.AppRecipeInfo, HTMLStencilElement {
    }
    var HTMLAppRecipeInfoElement: {
        prototype: HTMLAppRecipeInfoElement;
        new (): HTMLAppRecipeInfoElement;
    };
    interface HTMLAppRecipeListElement extends Components.AppRecipeList, HTMLStencilElement {
    }
    var HTMLAppRecipeListElement: {
        prototype: HTMLAppRecipeListElement;
        new (): HTMLAppRecipeListElement;
    };
    interface HTMLAppRecipeRatingsElement extends Components.AppRecipeRatings, HTMLStencilElement {
    }
    var HTMLAppRecipeRatingsElement: {
        prototype: HTMLAppRecipeRatingsElement;
        new (): HTMLAppRecipeRatingsElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppUserProfileElement extends Components.AppUserProfile, HTMLStencilElement {
    }
    var HTMLAppUserProfileElement: {
        prototype: HTMLAppUserProfileElement;
        new (): HTMLAppUserProfileElement;
    };
    interface HTMLAppViewFoodElement extends Components.AppViewFood, HTMLStencilElement {
    }
    var HTMLAppViewFoodElement: {
        prototype: HTMLAppViewFoodElement;
        new (): HTMLAppViewFoodElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-recipe-daily": HTMLAppRecipeDailyElement;
        "app-recipe-favorite": HTMLAppRecipeFavoriteElement;
        "app-recipe-info": HTMLAppRecipeInfoElement;
        "app-recipe-list": HTMLAppRecipeListElement;
        "app-recipe-ratings": HTMLAppRecipeRatingsElement;
        "app-root": HTMLAppRootElement;
        "app-user-profile": HTMLAppUserProfileElement;
        "app-view-food": HTMLAppViewFoodElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppRecipeDaily {
        "calories"?: number;
        "image"?: string;
        "name"?: string;
    }
    interface AppRecipeFavorite {
    }
    interface AppRecipeInfo {
    }
    interface AppRecipeList {
    }
    interface AppRecipeRatings {
        "canEdit"?: boolean;
        "ratings"?: number;
    }
    interface AppRoot {
    }
    interface AppUserProfile {
    }
    interface AppViewFood {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-recipe-daily": AppRecipeDaily;
        "app-recipe-favorite": AppRecipeFavorite;
        "app-recipe-info": AppRecipeInfo;
        "app-recipe-list": AppRecipeList;
        "app-recipe-ratings": AppRecipeRatings;
        "app-root": AppRoot;
        "app-user-profile": AppUserProfile;
        "app-view-food": AppViewFood;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-recipe-daily": LocalJSX.AppRecipeDaily & JSXBase.HTMLAttributes<HTMLAppRecipeDailyElement>;
            "app-recipe-favorite": LocalJSX.AppRecipeFavorite & JSXBase.HTMLAttributes<HTMLAppRecipeFavoriteElement>;
            "app-recipe-info": LocalJSX.AppRecipeInfo & JSXBase.HTMLAttributes<HTMLAppRecipeInfoElement>;
            "app-recipe-list": LocalJSX.AppRecipeList & JSXBase.HTMLAttributes<HTMLAppRecipeListElement>;
            "app-recipe-ratings": LocalJSX.AppRecipeRatings & JSXBase.HTMLAttributes<HTMLAppRecipeRatingsElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-user-profile": LocalJSX.AppUserProfile & JSXBase.HTMLAttributes<HTMLAppUserProfileElement>;
            "app-view-food": LocalJSX.AppViewFood & JSXBase.HTMLAttributes<HTMLAppViewFoodElement>;
        }
    }
}
