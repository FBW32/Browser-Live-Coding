import React, { useEffect ,useRef} from 'react'

export default function PaypalPage() {
    const btn = useRef()
    console.log(btn)
    useEffect(()=>{
            console.log(window)
            window.paypal.Buttons({
                createOrder:(data,actions)=>{
                    return actions.order.create({
                        purchase_units: [
                            {
                              amount: {
                                value: "200",
                              },
                            },
                          ],
                    })
                } ,
                onApprove:(data,actions)=>{
                    console.log(actions, data)
                    return actions.order.capture()
                } , 
                onCancel: (data,actions)=>{
                    console.log(actions, data)
                }
            }).render(btn.current)
    },[])


    return (
        <div ref={btn}>
            <h2>description : wrist watch</h2>
            <p>price : 200</p>
        </div>
    )
}
