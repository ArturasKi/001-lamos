function User({user}) {

    if (user.length === 0) {
        return <div className='lds-dual-ring'></div>;
    }
    return (
        <>
            {
                user.map(b => <div key={b.id} style={{color: b.color}}>{b.name}</div>)
            }
        </>
    );   
}

export default User;