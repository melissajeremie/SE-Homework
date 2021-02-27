console.log('js js js');

const groceries = [ 
    {item: 'Eggs', brand: 'Land O Lakes', units: 'Dozen', quantity: 1, isPurchased: false},
    {item: 'Cheddar cheese', brand: 'Kerrygold', units: '8oz', quantity: 1, isPurchased: false},
    {item: 'Butter', brand: 'Kerrygold', units: '16oz', quantity: 2, isPurchased: false},
    {item: 'Spinach', brand: 'Trader Joes', units: '16oz', quantity: 20, isPurchased: false},
];

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            groceries: groceries,
            item: '',
            brand: '',
            units: '',
            quantity: 0
        }
    }


    render() {
        return (
            <div>
                <h1>Groceries</h1>

                <form>
                    <label>Item:</label>
                    <input type="text" value={this.state.item} placeholder="Item" id="item"></input><br></br>

                    <label>Brand:</label>
                    <input type="text" value={this.state.brand} placeholder="Item" id="item"></input><br></br>

                    <label>Units:</label>
                    <input type="text" value={this.state.units} placeholder="Item" id="item"></input><br></br>

                    <label>Quantity:</label>
                    <input type="text" value={this.state.quantity} placeholder="Item" id="item"></input><br></br>
                    <input type="submit" />
                </form>

                <h3>Available Today:</h3>
                <ul>
                    {
                    this.state.groceries.map(product => {
                        // return(
                        //     <div>
                                <li>{product.item} - {product.brand}</li>
                            // </div>
                    //     )
                    })
                    }
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("main"));