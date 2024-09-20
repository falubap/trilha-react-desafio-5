import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://wxccbjugjpkqvpdkurpb.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4Y2NianVnanBrcXZwZGt1cnBiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjgyODY1NCwiZXhwIjoyMDQyNDA0NjU0fQ.09p8rrzZRBlwcvcbqGz0nrLnNhcRUjvm_6jPfylfQ2o",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4Y2NianVnanBrcXZwZGt1cnBiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjgyODY1NCwiZXhwIjoyMDQyNDA0NjU0fQ.09p8rrzZRBlwcvcbqGz0nrLnNhcRUjvm_6jPfylfQ2o"
    }
})