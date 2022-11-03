function LeftMenu(props) {
    const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
    const arr = props.listItems;
    console.log('list', arr)
    const handleClick = (size) => {
        let filterArr = [];
        for (let i = 0; i < arr.length; i++) {
            let availSizes = arr[i].availableSizes;
            if (availSizes.includes(size)) {
                filterArr.push(arr[i])
            }
        }
        props.setItems([...filterArr])
    }
    return (
        <div style={{
            textAlign: 'center', backgroundColor: 'fffff',
            width: 256 , height : '100vh'
        }}>
            <h4>Sizes</h4>
            <div style={{ display: 'flex' }} className='main-list'>
                {availableSizes.map((value, index) => {
                    return (<button className="list-item size-button" key={index} onClick={() => handleClick(value)}>{value} </button>
                    )
                })}
            </div>
        </div>
    )
}
export default LeftMenu;