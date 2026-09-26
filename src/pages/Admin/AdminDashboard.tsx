import React, { useState, useEffect } from 'react';
// import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus, Search, Edit2, Trash2, X } from 'lucide-react';
import './AdminDashboard.css';

interface Client {
  id: string;
  customer_name: string;
  phone_number: string;
  wetransfer_url: string;
  status: string;
  created_at: string;
}

const AdminDashboard: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  
  // Form state
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [wetransferUrl, setWetransferUrl] = useState('');
  const [status, setStatus] = useState('active');

  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    fetchClients();
  }, []);

  const checkUser = async () => {
    // HARDCODED DEMO - Bypass auth check
    // const { data: { session } } = await supabase.auth.getSession();
    // if (!session) {
    //   navigate('/admin/login');
    // }
  };

  const handleLogout = async () => {
    // await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const fetchClients = async () => {
    setLoading(true);
    // HARDCODED DEMO DATA
    setTimeout(() => {
      setClients([
        {
          id: '1',
          customer_name: 'Arun & Priya',
          phone_number: '9876543210',
          wetransfer_url: 'https://we.tl/t-examplelink',
          status: 'active',
          created_at: new Date().toISOString()
        },
        {
          id: '2',
          customer_name: 'Suresh Family',
          phone_number: '9360293815',
          wetransfer_url: 'https://we.tl/t-12345678',
          status: 'active',
          created_at: new Date(Date.now() - 86400000).toISOString()
        }
      ]);
      setLoading(false);
    }, 500);
  };

  const openModal = (client?: Client) => {
    if (client) {
      setEditingClient(client);
      setCustomerName(client.customer_name);
      setPhoneNumber(client.phone_number);
      setPassword(''); // Don't show existing password
      setWetransferUrl(client.wetransfer_url || '');
      setStatus(client.status);
    } else {
      setEditingClient(null);
      setCustomerName('');
      setPhoneNumber('');
      setPassword('');
      setWetransferUrl('');
      setStatus('active');
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingClient(null);
  };

  const handleSaveClient = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // HARDCODED DEMO - Just close modal and alert
    alert("DEMO MODE: Client would be saved to database here!");
    closeModal();
  };

  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      alert("DEMO MODE: Client would be deleted from database here!");
      // Remove from local state for demo
      setClients(clients.filter(c => c.id !== id));
    }
  };

  const filteredClients = clients.filter(c => 
    c.customer_name.toLowerCase().includes(search.toLowerCase()) || 
    c.phone_number.includes(search)
  );

  const activeCount = clients.filter(c => c.status === 'active').length;
  const inactiveCount = clients.length - activeCount;

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-inner">
        <div className="admin-header">
          <h1>Client Photo Portal</h1>
          <button 
            onClick={handleLogout}
            className="btn btn-outline"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>

        {/* Stats */}
        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <h3>Total Clients</h3>
            <p>{clients.length}</p>
          </div>
          <div className="admin-stat-card active">
            <h3>Active</h3>
            <p>{activeCount}</p>
          </div>
          <div className="admin-stat-card inactive">
            <h3>Inactive</h3>
            <p>{inactiveCount}</p>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="admin-actions">
          <div className="admin-search-wrapper">
            <div className="admin-search-icon">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search clients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="admin-search-input"
            />
          </div>
          <button
            onClick={() => openModal()}
            className="btn btn-primary"
          >
            <Plus size={18} />
            <span>Add New Client</span>
          </button>
        </div>

        {/* Table */}
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} style={{textAlign: 'center', padding: '2rem'}}>Loading clients...</td>
                </tr>
              ) : filteredClients.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{textAlign: 'center', padding: '2rem'}}>No clients found.</td>
                </tr>
              ) : (
                filteredClients.map((client) => (
                  <tr key={client.id}>
                    <td>
                      <div className="admin-customer-name">{client.customer_name}</div>
                    </td>
                    <td>{client.phone_number}</td>
                    <td>
                      <span className={`admin-status-badge ${client.status === 'active' ? 'admin-status-active' : 'admin-status-inactive'}`}>
                        {client.status}
                      </span>
                    </td>
                    <td>
                      {new Date(client.created_at).toLocaleDateString()}
                    </td>
                    <td>
                      <div className="admin-table-actions">
                        <button onClick={() => openModal(client)} className="admin-action-btn">
                          <Edit2 size={18} />
                        </button>
                        <button onClick={() => handleDelete(client.id, client.customer_name)} className="admin-action-btn delete">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-card">
            <div className="admin-modal-header">
              <h3>{editingClient ? 'Edit Client' : 'Add New Client'}</h3>
              <button onClick={closeModal} className="admin-modal-close">
                <X size={20} />
              </button>
            </div>
            <div className="admin-modal-body">
              <form onSubmit={handleSaveClient}>
                <div className="admin-form-group">
                  <label>Customer Name</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Arun & Priya"
                  />
                </div>
                
                <div className="admin-form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. 9876543210"
                  />
                </div>
                
                <div className="admin-form-group">
                  <label>
                    {editingClient ? 'New Password (leave empty to keep current)' : 'Password'}
                  </label>
                  <input
                    type="password"
                    required={!editingClient}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={editingClient ? '********' : 'e.g. ARUN2026'}
                  />
                </div>
                
                <div className="admin-form-group">
                  <label>WeTransfer Link</label>
                  <input
                    type="url"
                    value={wetransferUrl}
                    onChange={(e) => setWetransferUrl(e.target.value)}
                    placeholder="https://we.tl/..."
                  />
                </div>
                
                <div className="admin-form-group">
                  <label>Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="admin-modal-footer">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="btn btn-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    {editingClient ? 'Update Client' : 'Save Client'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
