import loki from 'lokijs';
import { IDaily } from '../interfaces/IDaily';
import { IProfile } from '../interfaces/IProfile';
import { IRecipe } from '../interfaces/IRecipe';
// import { CapacitorFileLokiAdapter } from './capacitor-file-loki-adapter';

//FIXME: Second adapter only used for testing
// const adapter = new loki.LokiPartitioningAdapter(new CapacitorFileLokiAdapter(), { paging: true });
const adapter = new loki.LokiMemoryAdapter({ asyncResponses: true });

let db: Loki;

export let dailyEntriesColl: Collection<IDaily>;
export let profileColl: Collection<IProfile>;
export let recipesColl: Collection<IRecipe>;

export let dailyEntriesView: DynamicView<IDaily>;
export let profileView: DynamicView<IProfile>;
export let recipesView: DynamicView<IRecipe>;

export function initLocalDB() {
    return new Promise(resolve => {
        db = new loki('food-tracker.db', {
            autosave: true,
            autoload: true,
            autoloadCallback: () => {

                dailyEntriesColl = db.getCollection('DailyEntries');
                if (!dailyEntriesColl) {
                    dailyEntriesColl = db.addCollection('DailyEntries');
                };
                dailyEntriesView = dailyEntriesColl.getDynamicView('DailyEntries');
                if (!dailyEntriesView) {
                    dailyEntriesView = dailyEntriesColl.addDynamicView('DailyEntries');

                }

                profileColl = db.getCollection('Profile');
                if (!profileColl) {
                    profileColl = db.addCollection('Profile');
                };
                profileView = profileColl.getDynamicView('Profile');
                if (!profileView) {
                    profileView = profileColl.addDynamicView('Profile');

                }

                recipesColl = db.getCollection('Recipes');
                if (!recipesColl) {
                    recipesColl = db.addCollection('Recipes');
                };
                recipesView = recipesColl.getDynamicView('Recipes');
                if (!recipesView) {
                    recipesView = recipesColl.addDynamicView('Recipes');
                }
                resolve('done');
            },
            adapter: adapter
        });
    });
}
