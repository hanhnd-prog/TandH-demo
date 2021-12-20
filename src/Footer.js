import React from 'react'

const fooTer = ( { fooTer }) => {
    return (
        <div className="Footer">
                <h4 className="">{fooTer[0].name}</h4>
                <h6 className="">{fooTer[0].address}</h6>
                <h6 className="">{fooTer[0].phone}</h6>
                <h6 className="">{fooTer[0].mail}</h6>
        </div>
    )
}
export default fooTer