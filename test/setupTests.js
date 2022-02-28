// Setup file
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import "regenerator-runtime/runtime.js";
configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});