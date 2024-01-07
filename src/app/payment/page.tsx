import dynamic from 'next/dynamic'

const Cart = dynamic(() => import('@/component/coal/cart'), {
    ssr: false,
    loading: () => <p>gg</p>
  })

export default function Payment(){
    return <Cart/>
}