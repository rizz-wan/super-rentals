import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CollegesRoute extends Route {
  @service store;

  async model() {
    if (this.store.peekAll('college').toArray().length <= 1)
      fetch('http://universities.hipolabs.com/search?name=grad')
        .then((response) => {
          response.json().then((res) => {
            // remove duplicate responses
            res = res.filter(
              (v, i, a) => a.findIndex((t) => t.name === v.name) === i
            );
            //insert uniques response into the store
            res.forEach((arrayItem, index) => {
              this.store.push({
                data: [
                  {
                    id: index,
                    type: 'college',
                    attributes: {
                      name: arrayItem.name,
                      country: arrayItem.country,
                      page: arrayItem.web_pages[0],
                      state_province: arrayItem.state_province,
                    },
                    relationships: {},
                  },
                ],
              });
            });
          });
        })
        .catch((err) => {
          console.error(err);
        });
  }
}
