const Footer = () => {
    return ( 
        <>
            <footer className="bg-(--button-primary-color)/10 text-(--text-color) mt-10 py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Desenvolvido por Equipe 1 @ Laboratório.CE</p>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;