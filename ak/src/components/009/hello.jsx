function Hello({spalva, bg}) {

    return (
        <h2 style={
            {
                color: spalva,
                backgroundColor: bg,
                padding: '10px'
            }
        }>Hello</h2>
    );
}

export default Hello;

// pirmi {} rodo perejima prie node'o, antri {} perejima prie js objekto.