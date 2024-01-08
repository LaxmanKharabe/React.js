import { useApiHook } from "../../Hooks/useApi.hook";

export function ApiFetchHook() {
    const { data, loading, error } = useApiHook('https://fakestoreapi.com/products');
    
    return (
        <div className="container-fluid p-3">
            <h1 className="bg-dark text-white p-2 d-inline">Api Data</h1>
            <div className="mt-3">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                
                {data && data.map(product => (
                    <p key={product.id}>{product.id}</p>
                ))}
            </div>
        </div>
    );
}
