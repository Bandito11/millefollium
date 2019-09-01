/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IDaily,
} from './interfaces';

export namespace Components {
  interface AppDaily {
    'breakfastCalories': number;
    'breakfastSnackCalories': number;
    'daily': IDaily;
    'dinnerCalories': number;
    'dinnerSnackCalories': number;
    'lunchCalories': number;
    'lunchSnackCalories': number;
  }
  interface AppDailyEntry {}
  interface AppFoodList {}
  interface AppFormFood {}
  interface AppHome {}
  interface AppRoot {}
  interface AppViewFood {}
}

declare global {


  interface HTMLAppDailyElement extends Components.AppDaily, HTMLStencilElement {}
  var HTMLAppDailyElement: {
    prototype: HTMLAppDailyElement;
    new (): HTMLAppDailyElement;
  };

  interface HTMLAppDailyEntryElement extends Components.AppDailyEntry, HTMLStencilElement {}
  var HTMLAppDailyEntryElement: {
    prototype: HTMLAppDailyEntryElement;
    new (): HTMLAppDailyEntryElement;
  };

  interface HTMLAppFoodListElement extends Components.AppFoodList, HTMLStencilElement {}
  var HTMLAppFoodListElement: {
    prototype: HTMLAppFoodListElement;
    new (): HTMLAppFoodListElement;
  };

  interface HTMLAppFormFoodElement extends Components.AppFormFood, HTMLStencilElement {}
  var HTMLAppFormFoodElement: {
    prototype: HTMLAppFormFoodElement;
    new (): HTMLAppFormFoodElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppViewFoodElement extends Components.AppViewFood, HTMLStencilElement {}
  var HTMLAppViewFoodElement: {
    prototype: HTMLAppViewFoodElement;
    new (): HTMLAppViewFoodElement;
  };
  interface HTMLElementTagNameMap {
    'app-daily': HTMLAppDailyElement;
    'app-daily-entry': HTMLAppDailyEntryElement;
    'app-food-list': HTMLAppFoodListElement;
    'app-form-food': HTMLAppFormFoodElement;
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
    'app-view-food': HTMLAppViewFoodElement;
  }
}

declare namespace LocalJSX {
  interface AppDaily extends JSXBase.HTMLAttributes<HTMLAppDailyElement> {
    'breakfastCalories'?: number;
    'breakfastSnackCalories'?: number;
    'daily'?: IDaily;
    'dinnerCalories'?: number;
    'dinnerSnackCalories'?: number;
    'lunchCalories'?: number;
    'lunchSnackCalories'?: number;
    'onUpdatedDailyEntry'?: (event: CustomEvent<any>) => void;
  }
  interface AppDailyEntry extends JSXBase.HTMLAttributes<HTMLAppDailyEntryElement> {}
  interface AppFoodList extends JSXBase.HTMLAttributes<HTMLAppFoodListElement> {}
  interface AppFormFood extends JSXBase.HTMLAttributes<HTMLAppFormFoodElement> {}
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface AppViewFood extends JSXBase.HTMLAttributes<HTMLAppViewFoodElement> {}

  interface IntrinsicElements {
    'app-daily': AppDaily;
    'app-daily-entry': AppDailyEntry;
    'app-food-list': AppFoodList;
    'app-form-food': AppFormFood;
    'app-home': AppHome;
    'app-root': AppRoot;
    'app-view-food': AppViewFood;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


