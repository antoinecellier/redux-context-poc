import React, { createContext, Component } from 'react'

export const ThemeContext = createContext({
    backgroundColor: '',
    switchBackground: () => {}
})

export const ThemeConsumer = ThemeContext.Consumer

export const withThemeStore = Component => props => (
    <ThemeConsumer>
        {store => <Component {...props} {...store} />}
    </ThemeConsumer>
)

class ThemeProvider extends Component {
    state = {
        backgroundColor: '',
        switchBackground: (backgroundColor) => this.setState({ backgroundColor })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeProvider;
