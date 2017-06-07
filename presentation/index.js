import React from "react";
import {
  BlockQuote,
  Cite,
	Code,
	CodePane,
  Deck,
	Fill,
  Heading,
	Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

function code(string) {
	return string.trim().split('\n').map(l => l.trim()).join('\n');
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
						JS/React/Redux Intro
          </Heading>
        </Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						JS Basics
					</Heading>
					<Text textAlign='left'>JS Evolves with TC39 WG</Text>
					<Text textAlign='left'>babel transpiles new features</Text>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						JS Basics
					</Heading>
					<Text textAlign='left' textColor='tertiary'>Important new features:</Text>
					<Text textAlign='left' margin="20px 0px 0px"><Code>let</Code> and <Code>const</Code> replace <Code>var</Code></Text>
					<Text textAlign='left' margin="10px 0px 0px">Modules -> <Code>import</Code> and <Code>export</Code></Text>
					<Text textAlign='left' margin="10px 0px 0px"><Code>async</Code> and <Code>await</Code></Text>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						JS Basics
					</Heading>
					<Text textAlign='left' textColor='tertiary'>
						<Code>let</Code> and <Code>const</Code>
					</Text>
					<Text textAlign='left' margin="20px 0px 0px 0px">
						<Code>var</Code> is old and bad, don’t use
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 0px">
						<Code>let</Code> replaces <Code>var</Code>, is a mutable variable
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 0px">
						<Code>const</Code> declares an immutable variable
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 20px" italic={true}>
						NOTE: the ref is immutable, not the value
					</Text>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						JS Basics
					</Heading>
					<Text textAlign='left' textColor='tertiary'>
						<Code>let</Code> and <Code>const</Code>
					</Text>
					<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
						'const foo = { name: \'Foo\' };',
						'foo.name = \'Brad\'; // works',
						'foo = { name: \'Bar\' }; // fails'
					].join('\n')}/>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						JS Basics
					</Heading>
					<Text textAlign='left' textColor='tertiary'>
						Modules
					</Text>
					<Layout>
						<Fill>
							<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
								"export default foo;",
								"export { foo };",
								"export { foo as Foo };",
								"export default foo; export { bar };"
							].join('\n')} />
						</Fill>
						<Fill>
							<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
								"import foo from \'./foo\';",
								"import { foo } from './foo';",
								"import { Foo } from './foo';",
								"import foo, { bar } from './foo';",
								"// or",
								"import * as FooModule from './foo';",
								"FooModule.default // foo",
								"FooModule.bar // bar"
							].join('\n')} />
						</Fill>
					</Layout>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						JS Basics
					</Heading>
					<Text textAlign='left' textColor='tertiary'>
						async/await
					</Text>
					<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
						"// Declare async function",
						"async function doSomethingAsync() { /* ... */ }",
						"// await any function that returns a promise",
						"const result = await doSomethingAsync();",
						"// try/catch promise rejections",
						"try {",
						"  const result = await doSomethingAsync();",
						"} catch (e) {",
						"  // e is the value rejected",
						"}"
					].join('\n')} />
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						JS Libraries
					</Heading>
					<Text textAlign='left' textColor='tertiary'>
						npm packages
					</Text>
					<Layout>
						<Fill>
					<Text textAlign='left' margin="20px 0px 0px 0px">
						<Code textSize='28'>immutable-js</Code>
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 20px" textSize='28'>
						List, Map, Set, OrderedMap, OrderedSet
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 0px">
						<Code textSize='28'>react</Code>
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 20px" textSize='28'>
						Component, JSX/createElement
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 0px">
						<Code textSize='28'>redux</Code>
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 20px" textSize='28'>
						createStore, combineReducers, bindActionCreators
					</Text>
						</Fill>
						<Fill>
					<Text textAlign='left' margin="10px 0px 0px 0px">
						<Code textSize='28'>react-redux</Code>
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 20px" textSize='28'>
						Provider, connect
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 0px">
						<Code textSize='28'>redux-actions</Code>
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 20px" textSize='28'>
						createAction, handleActions
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 0px">
						<Code textSize='28'>reselect</Code>
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 20px" textSize='28'>
						createSelector, createStructuredSelector
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 0px">
						<Code textSize='28'>redux-thunk</Code>
					</Text>
					<Text textAlign='left' margin="10px 0px 0px 20px" textSize='28'>
						dispatch functions
					</Text>
						</Fill>
					</Layout>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						React
					</Heading>
					<Text textAlign='left' textColor='tertiary' textSize={24}>
						Component, PureComponent, Functions as Components
					</Text>
					<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
						"class MyComponent extends React.Component {",
						"  render() {",
						"    return <Text color='red'>Hello, React</Text>;",
						"    // JSX for:",
						"    return React.createElement(",
						"      Text,",
						"      { color: 'red' },",
						"      'Hello, React'",
						"    );",
						"  }",
						"}"
					].join('\n')}/>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						React
					</Heading>
					<Text textAlign='left' textColor='tertiary' textSize={24}>
						Component, PureComponent, Functions as Components
					</Text>
					<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
						"class MyComponent extends React.Component {",
						"  render() {",
						"    // access props/state on this",
						"    console.log(this.props.color);",
						"    console.log(this.state.color);",
						"    // setState schedules a change to state",
						"    this.setState({ color: 'blue' });",
						"  }",
						"}"
					].join('\n')}/>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						React
					</Heading>
					<Text textAlign='left' textColor='tertiary' textSize={24}>
						Component, PureComponent, Functions as Components
					</Text>
					<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
						"function MyComponent(props) {",
						"  return <Text color='red'>Hello, React</Text>;",
						"}",
						"const MyComponent = (props) => (",
						"  <Text color='red'>Hello, React</Text>",
						");"
					].join('\n')}/>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						redux
					</Heading>
					<Text textAlign='left' textColor='tertiary' textSize={24}>
						A library for managing state outside react
					</Text>
					<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
						"function reducer(State, Action) -> State",
						"// deconstruct and recompose:",
						"combineReducers({",
						"  User: UserReducer,",
						"  Widgets: WidgetsReducer,",
						"})"
					].join('\n')}/>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						redux
					</Heading>
					<Text textAlign='left' textColor='tertiary' textSize={24}>
						A library for managing state outside react
					</Text>
					<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
						"// create a state container from a reducer:",
						"const store = createStore(reducer);",
						"// get current state",
						"store.getState();",
						"// dispatch an action to update",
						"store.dispatch({ type: 'INCREMENT', payload: { by: 5 } });",
						"// subscribe to state updates",
						"store.listen(function(state) { /* ... */ });"
					].join('\n')}/>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						redux
					</Heading>
					<Text textAlign='left' textColor='tertiary' textSize={24}>
						A library for managing state outside react
					</Text>
					<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
						"// action creators are functions that return actions",
						"// so you can parameterize actions",
						"const increment = ({ by = 1 }) => ({",
						"  type: 'INCREMENT',",
						"  payload: { by }",
						"});"
					].join('\n')}/>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						redux
					</Heading>
					<Text textAlign='left' textColor='tertiary' textSize={24}>
						A library for managing state outside react
					</Text>
					<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
						"// bindActionCreators binds action creators to a store",
						"// so you don’t need to pass a reference",
						"// to the store around",
						"const actions = bindActionCreators(",
						"  { increment },",
						"  store.dispatch",
						");",
						"actions.increment();"
					].join('\n')}/>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						react-redux
					</Heading>
					<Text textAlign='left' textColor='tertiary' textSize={24}>
						Connects redux to your react components
					</Text>
					<Text textAlign='left' textSize={24}>
						Provider is a component that subscribes to a store, and re-renders its children with the new state
					</Text>
					<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
						"<Provider store={store}>",
						"  <App />",
						"</Provider>"
					].join('\n')}/>
					<Text textAlign='left' textSize={24}>
						Access state via props, OR...
					</Text>
				</Slide>
				<Slide notes='mapStateToProps is a function that takes state, and returns an object that will be passed as the props to your component\nmapDispatchToProps is a function that takes a store dispatch function, and returns an object that will be passed as props to your component. This is your hook to bindActionCreators'>
					<Heading textAlign='left' size={2}>
						react-redux
					</Heading>
					<Text textAlign='left' textColor='tertiary' textSize={24}>
						Connects redux to your react components
					</Text>
					<Text textAlign='left' textSize={24}>
						connect is an HOC, that lets any component in the tree select state
					</Text>
					<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
						"connect(mapStateToProps, mapDispatchToProps)(MyComponent)",
					].join('\n')}/>
					<Text textAlign='left' textSize={24}>
						Returns a component! We call this connected component a Container.
					</Text>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						UI Layout
					</Heading>
					<Text textAlign='left' textSize={24} margin="20px 0px 0px">
						ReactNative implements CSS flexbox (ish)
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px">
						Can "absolute" position, as needed
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 20px" italic={true}>
						Views should always be responsive to their container
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px">
						For splitting layouts by breakpoint, use a component
					</Text>
					<CodePane textAlign='left' margin="10px 0px 0px" lang='javascript' textSize={28} source={[
						"<Width min={768}>",
						"  <MasterDetailLayout />",
						"</Width>",
						"<Width max={768}>",
						"  <SingleColumnLayout />",
						"</Width>",
						"// use Dimensions RN module to get window size",
						"const { width, height } = Dimensions.get('window');"
					].join('\n')}/>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						React Native parts
					</Heading>
					<Text textAlign='left' textColor='tertiary' textSize={24}>
						Packager
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px">
						Compiles source js files and images into single js bundle/assets
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px" italic={true}>
						<Code textSize={24}>yarn start</Code>
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 20px">
						Runs a server entry point to load/reload code over network
					</Text>
					<Text textAlign='left' textColor='tertiary' textSize={24} margin="20px 0px 0px 0px">
						Renderer/VM (Platform Specific)
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 0px">
						Provides react renderer implementation to native views
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 0px">
						Provides a JS vm on android (JavaScriptCore port)
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 0px">
						CSS-like Layout engine (yoga)
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 0px">
						Bridging APIs for exposing data and UI to JS
					</Text>
					<Text textAlign='left' textColor='tertiary' textSize={24} margin="20px 0px 0px 0px">
						Components
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 0px">
						Set of components that map to common basic UI elements
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 20px">
						ie: View, Text, Touchable, Image, Slider, etc.
					</Text>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						Tools!
					</Heading>
					<Text textAlign='left' textColor='tertiary' textSize={24}>
						RN Dev Menu
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px">
						Shake (iOS), CMD-M or menu (Android)
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 20px">
						Toggle Perf monitor, Inspector, Remote Debugging, Hot reloading
					</Text>
					<Text textAlign='left' textColor='tertiary' textSize={24} margin="20px 0px 0px">
						Debugging
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px">
						Chrome
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 20px">
						<Code textSize={24}>CMD-P</Code> in sources to find file
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 20px">
						Check 'async' option to trace async stacks
					</Text>
					<Text textAlign='left' textColor='tertiary' textSize={24} margin="20px 0px 0px">
						Testing with Jest
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px">
						Use <Code textSize={24}>--watch</Code> mode in dev
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 20px">
						<Code textSize={24}>p</Code> for filtering
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 20px">
						<Code textSize={24}>fit</Code> or <Code textSize={24}>xit</Code> to focus/exclude individual tests
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 20px">
						<Code textSize={24}>--coverage</Code> generates HTML report in coverage dir
					</Text>
				</Slide>
				<Slide>
					<Heading textAlign='left' size={2}>
						Tools!
					</Heading>
					<Text textAlign='left' textColor='tertiary' textSize={24}>
						nvm (Node Version Manager)
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px">
						<Code textSize={24}>nvm install vX.X.X</Code>
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px">
						<Code textSize={24}>nvm use vX.X.X</Code>
					</Text>
					<Text textAlign='left' textColor='tertiary' textSize={24} margin="20px 0px 0px">
						yarn &amp; npm
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px">
						package managers, use yarn (for now)
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 20px">
						<Code textSize={24}>yarn add package-name</Code>
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px 20px">
						<Code textSize={24}>yarn upgrade package-name</Code>
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px">
						generates yarn.lock, check this in
					</Text>
					<Text textAlign='left' textColor='tertiary' textSize={24} margin="20px 0px 0px">
						RN Packager (metro-bundler) &amp; haul
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px">
						metro-bundler is the RN packager
					</Text>
					<Text textAlign='left' textSize={24} margin="10px 0px 0px">
						haul is alternative that uses webpack
					</Text>
				</Slide>
				<Slide>
					<Heading fit caps size={1}>
						The end
					</Heading>
				</Slide>
      </Deck>
    );
  }
}
