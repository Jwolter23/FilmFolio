import Nav from './Nav';

export default function Layout({children}){
    <div>
        <Nav />
        <main>{children}</main>
    </div>
}