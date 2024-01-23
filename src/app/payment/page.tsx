import dynamic from 'next/dynamic'

const Cart = dynamic(() => import('@/component/coal/cart'), {
    ssr: false,
    loading: () => <p>gg</p>
  })

export default function Payment(){
    return <div>
                <h1>جاري التطوير</h1>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
}