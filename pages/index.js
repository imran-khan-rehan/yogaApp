import Header from '../components/navbar';
import Footer from '../components/footer';
import FirstComponent from '@/components/FirstComponent';

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <h2>Home Page</h2>
                <FirstComponent/>
                
            </main>
            <Footer />
        </div>
    );
}

