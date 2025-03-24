import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null; // Decode and return the token payload
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // Check if token exists and is not expired
  }
  
  isTokenExpired(token: string) {
    try {
      const { exp } = jwtDecode<JwtPayload>(token);
      if (!exp) return true;
      return Date.now() >= exp * 1000; // Compare current time with expiration time
    } catch (error) {
      return true; // If decoding fails, consider the token expired
    }
  }

  getToken(): string {
    return localStorage.getItem('id_token') || ''; // Retrieve the token from localStorage
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken); // Store the token in localStorage
    window.location.assign('/'); // Redirect to the home page
  }

  logout() {
    localStorage.removeItem('id_token'); // Remove the token from localStorage
    window.location.assign('/login'); // Redirect to the login page
  }
}

export default new AuthService();
