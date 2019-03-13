import Component, { tracked } from '@glimmer/component';

export default class UserProfile extends Component {
  @tracked firstName = 'Shankar';

  @tracked lastName = 'Sridhar';

  get fullName() {
    return this.firstName + this.lastName;
  }
}
