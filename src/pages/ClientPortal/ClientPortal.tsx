import React, { useState } from 'react';
// import { supabase } from '../../lib/supabase';
import { Camera, Image as ImageIcon, Lock, Phone } from 'lucide-react';
import './ClientPortal.css';

interface ClientData {
  customer_name: string;
  wetransfer_url: string;
}

const ClientPortal: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [clientData, setClientData] = useState<ClientData | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // HARDCODED DEMONSTRATION LOGIC
      setTimeout(() => {
        if (phoneNumber === '9876543210' && password === 'Mani2026') {
          setClientData({
            customer_name: 'Arun & Priya',
            wetransfer_url: 'https://we.tl/t-examplelink'
          });
        } else {
          setError('Invalid credentials! (Try Phone: 9876543210, Password: Mani2026)');
        }
        setLoading(false);
      }, 800);
      
    } catch (err: any) {
      console.error('Login error:', err);
      setError('An error occurred connecting to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleViewPhotos = () => {
    if (clientData?.wetransfer_url) {
      window.open(clientData.wetransfer_url, '_blank');
    }
  };

  return (
    <div className="client-portal-container">
      <div className="w-full">
        {!clientData ? (
          <div className="client-portal-card">
            <div className="client-portal-header">
              <div className="client-portal-icon">
                <ImageIcon size={32} />
              </div>
              <h1>Your Photos</h1>
              <p>Enter your phone number and password to access your private photo collection.</p>
            </div>

            <div className="client-portal-body">
              {error && <div className="client-error">{error}</div>}

              <form onSubmit={handleLogin}>
                <div className="client-form-group">
                  <label>Phone Number</label>
                  <div className="client-input-wrapper">
                    <div className="client-input-icon">
                      <Phone size={20} />
                    </div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      placeholder="Enter your phone number"
                      className="client-input"
                    />
                  </div>
                </div>

                <div className="client-form-group">
                  <label>Password</label>
                  <div className="client-input-wrapper">
                    <div className="client-input-icon">
                      <Lock size={20} />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your password"
                      className="client-input"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                >
                  {loading ? 'Authenticating...' : 'View My Photos'}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="client-success-card">
            <div className="client-portal-icon">
              <Camera size={32} />
            </div>
            
            <h2>
              Welcome, {clientData.customer_name}! <span style={{color: '#ef4444'}}>❤️</span>
            </h2>
            
            <h3>Your photos are ready.</h3>
            
            <p>
              Your special moments are waiting for you. Click the button below to view and download your high-resolution gallery.
            </p>

            {clientData.wetransfer_url ? (
              <button
                onClick={handleViewPhotos}
                className="btn btn-primary"
              >
                <span>View Your Photos</span>
              </button>
            ) : (
              <div className="client-link-error">
                Your photo link is currently unavailable.
                <br />
                Please contact the photography studio.
              </div>
            )}
            
            <div className="client-signout">
              <button onClick={() => setClientData(null)}>
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientPortal;
