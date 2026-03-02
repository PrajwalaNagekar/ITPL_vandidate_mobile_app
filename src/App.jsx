import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, CheckCircle2, Circle, Clock, FileText, Upload, 
  MessageSquare, User, Home, AlertTriangle, Calendar, MapPin, 
  Video, Phone, ShieldCheck, Check, Search, Download, Edit3, X,
  FileBadge2, Briefcase, Award, Plane, ChevronLeft, Loader2,
  Bell, Battery, Wifi, Signal, FileSignature, Mic, MicOff, Camera,
  Copy, Sparkles, HardHat, Factory, Paperclip, Send, CheckCheck,
  Eye, ChevronUp, ChevronDown, ArrowUp, LogOut
} from 'lucide-react';

// --- THEME & CONSTANTS ---
const THEME = {
  primary: 'bg-[#111827]', 
  primaryText: 'text-[#111827]',
  accent: 'bg-[#0055FF]', 
  bg: 'bg-[#EEF2F6]', 
  card: 'bg-white',
  success: 'text-[#10B981]', 
  successBg: 'bg-[#D1FAE5]',
  warning: 'text-[#F59E0B]',
  warningBg: 'bg-[#FEF3C7]',
  error: 'text-[#EF4444]',
  errorBg: 'bg-[#FEE2E2]',
};

const INITIAL_TASKS = [
  { id: 1, title: 'Passport Copy', status: 'Verified', category: 'Identity', date: 'Oct 12' },
  { id: 2, title: 'National ID', status: 'Verified', category: 'Identity', date: 'Oct 12' },
  { id: 3, title: 'Passport Photo', status: 'Submitted', category: 'Identity', date: 'Oct 18' },
  { id: 4, title: 'Medical Fitness Certificate', status: 'Pending', category: 'Medical', date: 'Due Oct 27' },
  { id: 5, title: 'Police Clearance Certificate', status: 'Pending', category: 'Legal', date: 'Due Oct 30' },
];

const KSA_DOCUMENTS = [
  { id: 'offer', title: 'Offer Letter', desc: 'Employment offer from ITL International', status: 'Signed', icon: FileText },
  { id: 'loi', title: 'Letter of Intent (LOI)', desc: 'Statement of intent for employment engagement', status: 'Signed', icon: FileText },
  { id: 'joining', title: 'Joining Letter', desc: 'Official joining confirmation and terms', status: 'Action Required', icon: FileText },
];

const INITIAL_PROFILE = {
  fullName: 'Ahmed Al-Rashid',
  phone: '+966 512 345 678',
  email: 'ahmed.rashid@email.com',
  dob: '1992-05-14',
  nationality: 'India',
  originCity: 'Bangalore',
  gender: 'Male',
  maritalStatus: 'Single',
  bloodGroup: 'O+',
  religion: 'Islam',
  education: 'Diploma in Electrical Engineering',
  languages: 'Hindi, English, Arabic',
  emergencyContact: '+966 500 111 222',
  jobTitle: 'Senior Plant Technician',
  passportNumber: 'A12345678',
  photo: null
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentView, setCurrentView] = useState('splash'); 
  const [activeTab, setActiveTab] = useState('dashboard'); 
  const [generatedId, setGeneratedId] = useState('');
  
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [documents, setDocuments] = useState(KSA_DOCUMENTS);
  const [profileData, setProfileData] = useState(INITIAL_PROFILE);
  const [showNotifications, setShowNotifications] = useState(false);
  const [toast, setToast] = useState(null);
  const [viewingDoc, setViewingDoc] = useState(null);

  useEffect(() => {
    if (currentView === 'splash') {
      const timer = setTimeout(() => setCurrentView('login'), 2500);
      return () => clearTimeout(timer);
    }
  }, [currentView]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleFileUpload = (taskId) => {
    showToast('Uploading document...');
    setTimeout(() => {
      setTasks(tasks.map(t => t.id === taskId ? { ...t, status: 'Submitted' } : t));
      showToast('Document submitted successfully!');
      setTimeout(() => {
        setTasks(current => current.map(t => t.id === taskId ? { ...t, status: 'Verified' } : t));
      }, 5000);
    }, 1500);
  };

  const handleSignDocument = (signedDoc) => {
    showToast(`${signedDoc.title} Digitally Signed!`, 'success');
    setDocuments(docs => docs.map(d => d.id === signedDoc.id ? { ...d, status: 'Signed' } : d));
    setTimeout(() => {
      setCurrentView('main');
      setViewingDoc(null);
    }, 1500);
  };

  const hideGlobalHeader = activeTab === 'profile' || activeTab === 'messages' || activeTab === 'tasks';
  const isDarkHeader = currentView === 'splash' || currentView === 'interview' || (currentView === 'main' && activeTab === 'profile');

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Poppins:wght@400;500;600;700;800&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
        .font-serif {
          font-family: 'Playfair Display', serif !important;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
      `}} />
      <div className="flex justify-center items-center bg-white min-h-screen sm:p-4 md:p-8">
        
        {/* iPhone 16 Pro Max Device Frame (Widened for better presentation) */}
        <div className={`relative w-full max-w-[480px] h-[950px] ${THEME.bg} sm:rounded-[60px] shadow-2xl overflow-hidden flex flex-col border-[16px] border-black ring-1 ring-gray-800`}>
          
          {/* iOS Status Bar */}
          <div className={`absolute top-0 w-full h-14 z-50 flex justify-between items-center px-8 pointer-events-none transition-colors duration-300 ${isDarkHeader ? 'text-white' : 'text-[#111827]'}`}>
            <span className="text-[16px] font-semibold tracking-tight mt-1">15:41</span>
            
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-[130px] h-[34px] bg-black rounded-full flex items-center justify-between px-3">
              {currentView === 'interview' && (
                <div className="flex items-center gap-1 w-full justify-between px-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-green-500 font-bold">02:14</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1.5 mt-1">
              <Signal size={16} strokeWidth={2.5} />
              <Wifi size={16} strokeWidth={2.5} />
              <div className="relative flex items-center">
                <Battery size={22} strokeWidth={1.5} className="opacity-80" />
                <div className={`absolute left-[3px] top-[7px] w-[13px] h-[8px] rounded-sm ${isDarkHeader ? 'bg-white' : 'bg-[#111827]'}`}></div>
              </div>
            </div>
          </div>

          {/* Global Toast Notification */}
          {toast && (
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-[100] w-[90%] bg-[#111827] text-white px-5 py-3.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 animate-in slide-in-from-top-4 fade-in">
              {toast.type === 'success' ? <CheckCircle2 size={20} className="text-green-400" /> : <AlertTriangle size={20} className="text-amber-400" />}
              <span className="text-[13px] font-semibold">{toast.message}</span>
            </div>
          )}

          {/* Notifications Slide-out */}
          {showNotifications && (
            <div className="absolute inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity">
              <div className="absolute top-0 right-0 w-[85%] h-full bg-[#F9FAFB] shadow-2xl animate-in slide-in-from-right pt-20 px-5 flex flex-col rounded-l-[40px]">
                <div className="flex justify-between items-center mb-6 shrink-0">
                  <h2 className="text-[22px] font-bold tracking-tight text-gray-900">Notifications</h2>
                  <button onClick={() => setShowNotifications(false)} className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"><X size={20} className="text-gray-600" /></button>
                </div>
                
                <div className="space-y-4 overflow-y-auto hide-scrollbar pb-10 flex-1">
                  <div className="bg-white p-4 rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                         <FileSignature className="text-blue-600" size={18} />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-[#111827] tracking-tight">Offer Letter Ready</h4>
                        <p className="text-[12px] font-medium text-[#4B5563] mt-1 leading-relaxed">Your Kingdom of Saudi Arabia compliant offer letter is ready for signature.</p>
                        <span className="text-[10px] font-semibold text-gray-400 mt-2 block">10 mins ago</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                         <AlertTriangle className="text-amber-500" size={18} />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-[#111827] tracking-tight">Medical Pending</h4>
                        <p className="text-[12px] font-medium text-[#4B5563] mt-1 leading-relaxed">Please schedule your medical fitness test within 3 days.</p>
                        <span className="text-[10px] font-semibold text-gray-400 mt-2 block">2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* View Router */}
          <div className="flex-1 h-full w-full relative">
            {currentView === 'splash' && <SplashScreen />}
            {currentView === 'login' && <LoginScreen onNavigate={(v) => { setCurrentView(v); if (v === 'main') setActiveTab('dashboard'); }} />}
            {currentView === 'signup' && <SignUpScreen onNavigate={setCurrentView} setGeneratedId={setGeneratedId} />}
            {currentView === 'id-modal' && <IdConfirmationModal generatedId={generatedId} onNavigate={setCurrentView} showToast={showToast} />}
            {currentView === 'onboarding' && <OnboardingFlow onNavigate={(v) => { setCurrentView(v); if (v === 'main') setActiveTab('dashboard'); }} showToast={showToast} profileData={profileData} setProfileData={setProfileData} generatedId={generatedId} />}
            {currentView === 'interview' && <ActiveInterviewScreen onNavigate={setCurrentView} showToast={showToast} />}
            {currentView === 'document_viewer' && <DocumentViewer doc={viewingDoc} onNavigate={setCurrentView} onSign={() => handleSignDocument(viewingDoc)} />}
            
            {currentView === 'main' && (
              <div className="flex flex-col h-full relative pb-0">
                
                {/* Global Header */}
                {!hideGlobalHeader && (
                  <div className="px-6 pt-16 py-3 flex justify-between items-center z-10 shrink-0">
                    <div>
                      <h1 className={`text-[24px] font-bold tracking-tight ${THEME.primaryText}`}>{profileData.fullName.split(' ')[0]} A.</h1>
                      <p className="text-[11px] font-semibold text-[#6B7280] mt-0.5">Candidate ID: {generatedId || 'ITL-83749201'}</p>
                    </div>
                    <button 
                      onClick={() => setShowNotifications(true)}
                      className="relative p-3 rounded-full bg-white shadow-sm border border-gray-100"
                    >
                      <Bell size={20} className="text-[#111827]" />
                      <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
                    </button>
                  </div>
                )}

                {/* Main Scrollable Content Area */}
                <div className={`flex-1 flex flex-col w-full ${activeTab === 'messages' ? 'overflow-hidden' : 'overflow-y-auto hide-scrollbar pb-[100px]'}`}>
                  {activeTab === 'dashboard' && <DashboardTab setActiveTab={setActiveTab} onNavigate={setCurrentView} setViewingDoc={setViewingDoc} documents={documents} profileData={profileData} />}
                  {activeTab === 'tracker' && <ProcessTrackerTab setActiveTab={setActiveTab} documents={documents} tasks={tasks} />}
                  {activeTab === 'tasks' && <DocumentsTab tasks={tasks} onUpload={handleFileUpload} documents={documents} onViewDoc={(doc) => { setViewingDoc(doc); setCurrentView('document_viewer'); }} showToast={showToast} />}
                  {activeTab === 'messages' && <MessagesTab />}
                  {activeTab === 'profile' && <ProfileTab onNavigate={setCurrentView} profileData={profileData} setProfileData={setProfileData} showToast={showToast} generatedId={generatedId} />}
                </div>
                
                <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
            )}
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full z-50"></div>
        </div>
      </div>
    </>
  );
}

// --- HELPER COMPONENTS ---

function ProfileRow({ label, field, value, warning, isEditing, editData, setEditData, type = "text", options }) {
  const handleChange = (e) => {
    setEditData({ ...editData, [field]: e.target.value });
  };

  return (
    <div className="flex justify-between items-center py-1.5 min-h-[36px]">
      <span className="text-[11px] font-semibold text-[#6B7280] w-[40%]">{label}</span>
      
      {isEditing && field ? (
        <div className="w-[60%] flex justify-end">
          {options ? (
            <select 
              value={editData[field] || ''} 
              onChange={handleChange}
              className="w-full text-right text-[13px] font-semibold text-[#111827] bg-gray-50 rounded-full px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#111827] appearance-none border border-gray-200"
            >
              {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          ) : (
            <input 
              type={type} 
              value={editData[field] || ''} 
              onChange={handleChange}
              className="w-full text-right text-[13px] font-semibold text-[#111827] bg-gray-50 rounded-full px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#111827] border border-gray-200"
            />
          )}
        </div>
      ) : (
        <span className="text-[13px] font-semibold text-[#111827] flex items-center gap-1.5 text-right w-[60%] justify-end">
          <span className="truncate">{value || '-'}</span>
          {warning && <AlertTriangle size={14} className="text-amber-500 shrink-0" strokeWidth={2.5} />}
        </span>
      )}
    </div>
  );
}

function FormInput({ label, value, onChange, type = "text", placeholder, readOnly = false }) {
  return (
    <div className="mb-5">
      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1 block mb-2">{label}</label>
      <div className={`p-2 rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 ${readOnly ? 'bg-gray-100' : 'bg-white'}`}>
         <input 
           type={type} 
           value={value}
           onChange={readOnly ? undefined : (e) => onChange(e.target.value)}
           placeholder={placeholder} 
           readOnly={readOnly}
           className={`w-full px-3 py-2.5 bg-transparent rounded-xl focus:outline-none font-medium text-[#111827] text-[14px] ${readOnly ? 'cursor-not-allowed text-gray-500 font-bold' : ''}`}
         />
      </div>
    </div>
  );
}

// --- SCREENS ---

function SplashScreen() {
  return (
    <div className={`h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#A5C0EE] to-[#60A5FA] relative`}>
      <div className="absolute top-1/4 w-full flex justify-center opacity-20">
         <div className="w-[300px] h-[300px] bg-white rounded-full blur-[80px]"></div>
      </div>
      <div className="animate-pulse flex flex-col items-center z-10 px-6">
        <div className="flex items-center justify-center gap-3 mb-2">
           <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-[16px] flex items-center justify-center shadow-lg border border-white/30">
             <ShieldCheck size={32} className="text-[#10B981]" strokeWidth={2.5} />
           </div>
           <h1 className="text-[48px] font-black tracking-tight text-white">I T L</h1>
        </div>
        <p className="text-[15px] font-bold mt-2 text-white tracking-wide text-center leading-snug drop-shadow-sm">
          Empowering the Global Workforce in the Kingdom
        </p>
      </div>
    </div>
  );
}

function LoginScreen({ onNavigate }) {
  return (
    <div className="h-full w-full flex flex-col pt-24 px-6 bg-[#F8FAFC] animate-in fade-in duration-500 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] -z-10"></div>
      
      <div className="flex justify-between items-end mb-8 z-10">
        <div>
           <div className="w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center mb-6 shadow-md">
              <HardHat size={20} className="text-white" />
           </div>
           <h1 className="text-[32px] font-bold tracking-tight text-[#111827] leading-tight">Welcome <br/>back</h1>
        </div>
        <span className="text-[11px] font-semibold text-[#4B5563] bg-white px-4 py-2 rounded-full shadow-sm mb-2 border border-gray-100">English / عربى</span>
      </div>
      
      <p className="text-[#4B5563] mb-8 font-medium text-[14px] leading-relaxed z-10">Sign in to track your deployment and sign compliance documents.</p>

      <div className="space-y-4 z-10">
        <div className="bg-white p-2 rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
           <input 
             type="text" 
             placeholder="Candidate ID" 
             className="w-full p-4 bg-transparent rounded-xl focus:outline-none font-medium text-[#111827] text-[15px]"
           />
        </div>
        <div className="bg-white p-2 rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
           <input 
             type="password" 
             placeholder="Password" 
             className="w-full p-4 bg-transparent rounded-xl focus:outline-none font-medium text-[#111827] text-[15px]"
           />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 mb-10 px-2 z-10">
        <label className="flex items-center text-[13px] font-medium text-[#4B5563]">
          <input type="checkbox" className="mr-2 rounded text-[#111827] focus:ring-[#111827] w-4 h-4 accent-[#111827]" />
          Remember me
        </label>
        <button className="text-[13px] font-semibold text-[#111827]">Forgot Password?</button>
      </div>

      <div className="mt-auto pb-12 flex gap-3 z-10">
        <button 
          onClick={() => onNavigate('main')} 
          className="flex-1 py-4 rounded-full bg-[#111827] text-white font-semibold text-[15px] shadow-[0_8px_20px_rgba(17,24,39,0.2)] hover:bg-gray-800 transition-colors"
        >
          Log in
        </button>
        <button 
          onClick={() => onNavigate('signup')} 
          className="flex-1 py-4 rounded-full bg-white text-[#111827] font-semibold text-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-100 hover:bg-gray-50 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function SignUpScreen({ onNavigate, setGeneratedId }) {
  const handleSignUp = () => {
    // Generate 8 digit number prefixed with ITL-
    const random8Digit = Math.floor(10000000 + Math.random() * 90000000);
    setGeneratedId(`ITL-${random8Digit}`);
    onNavigate('id-modal');
  };

  return (
    <div className="h-full w-full flex flex-col pt-16 px-6 bg-[#F8FAFC] overflow-y-auto hide-scrollbar animate-in slide-in-from-right duration-300">
      <button onClick={() => onNavigate('login')} className="mb-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[#111827] border border-gray-100">
        <ChevronLeft size={20} />
      </button>

      <h1 className="text-[28px] font-bold tracking-tight text-[#111827] mb-2">Create Account</h1>
      <p className="text-[#4B5563] mb-8 font-medium text-[14px]">Enter your details to join the industrial pipeline.</p>

      <div className="space-y-4 pb-12">
        {['Full Legal Name', 'Email Address', 'Mobile Number', 'Passport Number', 'Create Password'].map((placeholder, idx) => (
          <div key={idx} className="bg-white p-2 rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
            <input 
              type={placeholder.includes('Password') ? 'password' : 'text'} 
              placeholder={placeholder} 
              className="w-full p-4 bg-transparent rounded-xl focus:outline-none font-medium text-[#111827] text-[14px]"
            />
          </div>
        ))}
        <button onClick={handleSignUp} className="w-full py-4 mt-8 rounded-full bg-[#111827] text-white font-semibold text-[15px] shadow-[0_8px_20px_rgba(17,24,39,0.2)]">
          Continue
        </button>
      </div>
    </div>
  );
}

function IdConfirmationModal({ generatedId, onNavigate, showToast }) {
  const copyId = () => {
    showToast('Candidate ID copied to clipboard');
  };

  return (
    <div className="absolute inset-0 z-50 bg-[#111827]/40 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-[40px] p-8 w-full shadow-2xl text-center transform animate-in zoom-in-95 duration-300">
        <div className="mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={36} className="text-green-500" strokeWidth={2.5} />
        </div>
        <h2 className="text-[24px] font-bold tracking-tight text-[#111827] mb-3">ID Generated</h2>
        <p className="text-[#4B5563] text-[13px] font-medium leading-relaxed mb-8">Your unique candidate ID has been generated successfully. Please use it for future logins.</p>
        
        <div className="bg-gray-50 border border-gray-100 rounded-[32px] p-6 mb-8 relative">
          <p className="text-[11px] text-[#6B7280] font-semibold mb-1 uppercase tracking-widest">Candidate ID</p>
          <p className="text-[24px] font-bold tracking-tight text-[#111827]">{generatedId}</p>
          <button onClick={copyId} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm text-gray-500 hover:text-[#111827]">
            <Copy size={16} />
          </button>
        </div>
        <button onClick={() => onNavigate('onboarding')} className="w-full py-4 rounded-full bg-[#111827] text-white font-semibold text-[15px] shadow-lg hover:bg-gray-800">
          Setup Profile
        </button>
      </div>
    </div>
  );
}

function OnboardingFlow({ onNavigate, showToast, profileData, setProfileData, generatedId }) {
  const [step, setStep] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState(profileData || {});

  const handleAiUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      showToast('Resume parsed successfully!', 'success');
      onNavigate('main');
    }, 2500);
  };

  const handleManualSkip = () => {
    setStep(1); // Proceed to manual 5-step form
  };

  const handleNextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      setProfileData(formData);
      showToast('Profile created successfully!', 'success');
      onNavigate('main');
    }
  };

  const handlePrevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isUploading) {
    return (
      <div className="h-full w-full bg-[#F8FAFC] flex flex-col items-center justify-center relative z-40 px-6 animate-in fade-in">
        <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-8 border border-gray-100 relative">
          <Loader2 className="text-[#111827] animate-spin absolute" size={32} />
        </div>
        <h2 className="text-[22px] font-bold tracking-tight text-[#111827]">Analyzing Resume</h2>
        <p className="text-[#4B5563] text-center mt-3 font-medium text-[14px]">Extracting your experience automatically...</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-[#F8FAFC] flex flex-col pt-16 px-6 relative z-40 animate-in slide-in-from-right duration-300">
      
      {/* Progress Bar (Visible only during manual entry) */}
      {step > 0 && (
        <div className="mb-6 shrink-0">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Manual Setup</span>
            <span className="text-[10px] font-bold text-[#111827] uppercase tracking-widest">Step {step} of 5</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#111827] transition-all duration-300" style={{ width: `${(step / 5) * 100}%` }}></div>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-[100px]">
        
        {/* Step 0: Initial choice */}
        {step === 0 && (
          <div className="animate-in fade-in slide-in-from-right-4 pt-4">
            <h1 className="text-[28px] font-bold tracking-tight text-[#111827] mb-2">Build Profile</h1>
            <p className="text-[#4B5563] mb-10 font-medium text-[14px]">Upload your resume to instantly auto-fill your master profile.</p>

            <button 
              onClick={handleAiUpload}
              className="w-full py-10 border-2 border-dashed border-blue-200 bg-white rounded-[40px] flex flex-col items-center justify-center hover:bg-blue-50 transition-colors shadow-sm"
            >
              <div className="w-16 h-16 bg-[#111827] rounded-full shadow-md flex items-center justify-center mb-4">
                <Upload size={24} className="text-white" />
              </div>
              <span className="font-bold text-[#111827] text-[16px]">Upload Resume</span>
              <span className="text-[12px] font-medium text-[#6B7280] mt-1">PDF, DOCX up to 5MB</span>
            </button>

            <div className="mt-8">
               <button onClick={handleManualSkip} className="w-full py-4 rounded-full bg-white text-[#111827] font-semibold text-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-100">
                 Skip & Enter Manually
               </button>
            </div>
          </div>
        )}

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h1 className="text-[24px] font-bold tracking-tight text-[#111827] mb-6">Personal Details</h1>
            <FormInput label="Candidate ID (System Generated)" value={generatedId || 'ITL-83749201'} readOnly={true} />
            <FormInput label="Full Name" value={formData.fullName} onChange={(v) => handleChange('fullName', v)} placeholder="e.g. Ahmed Al-Rashid" />
            <FormInput label="Phone Number" value={formData.phone} onChange={(v) => handleChange('phone', v)} type="tel" placeholder="+966 500 000 000" />
            <FormInput label="Email Address" value={formData.email} onChange={(v) => handleChange('email', v)} type="email" placeholder="ahmed@example.com" />
            <FormInput label="Date of Birth" value={formData.dob} onChange={(v) => handleChange('dob', v)} type="date" />
          </div>
        )}

        {/* Step 2: Background */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h1 className="text-[24px] font-bold tracking-tight text-[#111827] mb-6">Background</h1>
            <FormInput label="Nationality" value={formData.nationality} onChange={(v) => handleChange('nationality', v)} placeholder="e.g. Indian" />
            <FormInput label="Origin City" value={formData.originCity} onChange={(v) => handleChange('originCity', v)} placeholder="e.g. Bangalore" />
            <FormInput label="Religion" value={formData.religion} onChange={(v) => handleChange('religion', v)} placeholder="e.g. Islam" />
            <FormInput label="Blood Group" value={formData.bloodGroup} onChange={(v) => handleChange('bloodGroup', v)} placeholder="e.g. O+" />
          </div>
        )}

        {/* Step 3: Professional */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h1 className="text-[24px] font-bold tracking-tight text-[#111827] mb-6">Experience & Education</h1>
            <FormInput label="Current Job Title" value={formData.jobTitle} onChange={(v) => handleChange('jobTitle', v)} placeholder="e.g. Senior Plant Technician" />
            <FormInput label="Highest Education" value={formData.education} onChange={(v) => handleChange('education', v)} placeholder="e.g. Diploma in Engineering" />
            <FormInput label="Languages Spoken" value={formData.languages} onChange={(v) => handleChange('languages', v)} placeholder="e.g. Hindi, English, Arabic" />
          </div>
        )}

        {/* Step 4: Compliance */}
        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h1 className="text-[24px] font-bold tracking-tight text-[#111827] mb-6">Compliance Setup</h1>
            <FormInput label="Passport Number" value={formData.passportNumber} onChange={(v) => handleChange('passportNumber', v)} placeholder="e.g. A12345678" />
            
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-[24px] flex gap-3 items-start mt-6">
              <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-[12px] font-medium text-amber-900 leading-relaxed">Ensure your passport is valid for at least 6 months from the date of expected travel to Kingdom of Saudi Arabia.</p>
            </div>
          </div>
        )}

        {/* Step 5: Emergency & Final */}
        {step === 5 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h1 className="text-[24px] font-bold tracking-tight text-[#111827] mb-6">Emergency Info</h1>
            <FormInput label="Emergency Contact Phone" value={formData.emergencyContact} onChange={(v) => handleChange('emergencyContact', v)} type="tel" placeholder="+966 511 111 111" />
            
            <div className="mt-10 p-6 bg-white rounded-[32px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 text-center">
               <div className="w-16 h-16 bg-[#D1FAE5] rounded-full flex items-center justify-center mx-auto mb-4">
                 <CheckCircle2 size={32} className="text-[#10B981]" />
               </div>
               <h3 className="font-bold text-[#111827] text-[16px] mb-2">Ready to Complete</h3>
               <p className="text-[13px] text-[#6B7280]">Your profile is set up and ready for deployment tracking.</p>
            </div>
          </div>
        )}

      </div>

      {/* Manual Step Navigation Footer */}
      {step > 0 && (
        <div className="absolute bottom-6 left-6 right-6 flex gap-3 z-50">
          <button 
            onClick={handlePrevStep}
            className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#111827] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-100 hover:bg-gray-50 transition-colors shrink-0"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNextStep}
            className={`flex-1 h-14 rounded-full text-white font-bold text-[15px] shadow-[0_8px_20px_rgba(17,24,39,0.2)] flex items-center justify-center gap-2 ${THEME.primary} hover:opacity-95 transition-opacity`}
          >
            {step === 5 ? 'Complete Profile' : 'Continue'} {step !== 5 && <ChevronRight size={20} />}
          </button>
        </div>
      )}
    </div>
  );
}

// --- TABS ---
function DocumentsTab({ tasks, onUpload, documents, onViewDoc, showToast }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { label: 'All', id: 'All' },
    { label: 'Verified', id: 'Verified' },
    { label: 'Pending', id: 'Pending' },
  ];

  const filteredTasks = activeFilter === 'All' ? tasks : tasks.filter(t => t.status === activeFilter);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Verified': return 'text-[#10B981] bg-[#D1FAE5]';
      case 'Submitted': return 'text-[#3B82F6] bg-[#DBEAFE]';
      case 'Pending': return 'text-[#F59E0B] bg-[#FEF3C7]';
      default: return 'text-[#6B7280] bg-gray-100';
    }
  };

  return (
    <div className="px-5 animate-in fade-in duration-300 pt-14 pb-4">
      <div className="mb-8">
        <h1 className="text-[26px] font-bold tracking-tight text-[#111827]">Documents</h1>
        <p className="text-[14px] font-medium text-[#4B5563] mt-1">Manage your official records</p>
      </div>

      <div className="bg-white p-1 rounded-full flex shadow-[0_2px_10px_rgb(0,0,0,0.03)] border border-gray-100 mb-8 w-fit">
        {filters.map(filter => {
          const isActive = activeFilter === filter.id;
          return (
            <button 
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all ${
                isActive 
                  ? 'bg-[#111827] text-white shadow-md' 
                  : 'text-[#6B7280] hover:text-[#111827]'
              }`}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      <div className="mb-8">
        <h3 className="text-[16px] font-bold text-[#111827] mb-4 pl-1">Official Letters</h3>
        <div className="space-y-3">
          {documents.map((doc) => (
            <div key={doc.id} className="bg-white rounded-[28px] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex items-center justify-between border border-transparent hover:border-gray-100 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                   <FileText size={20} strokeWidth={2}/>
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-[#111827]">{doc.title}</h4>
                  <p className="text-[12px] font-medium text-[#6B7280] mt-0.5">{doc.status}</p>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => onViewDoc(doc)} className="w-10 h-10 bg-gray-50 text-[#111827] rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Eye size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[16px] font-bold text-[#111827] mb-4 pl-1">Uploaded Records</h3>
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div key={task.id} className="bg-white rounded-[28px] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex items-center justify-between border border-gray-50">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${getStatusColor(task.status)}`}>
                  {task.status === 'Verified' ? <CheckCircle2 size={20} /> : <FileText size={20} />}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#111827] tracking-tight">{task.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-[11px] font-medium text-[#6B7280]">
                    <span>{task.status}</span>
                    <span>•</span>
                    <span>{task.date}</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                {(task.status === 'Pending' || task.status === 'Rejected') ? (
                  <button onClick={() => onUpload(task.id)} className="bg-[#111827] text-white text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
                    Upload
                  </button>
                ) : (
                  <button onClick={() => showToast(`Downloading ${task.title}...`)} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-[#111827] hover:bg-gray-100 transition-colors">
                    <Download size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardTab({ setActiveTab, onNavigate, setViewingDoc, documents, profileData }) {
  const actionDoc = documents.find(d => d.status === 'Action Required');
  const allSigned = documents.every(d => d.status === 'Signed');

  return (
    <div className="px-5 space-y-6 animate-in fade-in duration-300 pt-2">
      
      {/* High Contrast Hero Card */}
      <div className={`bg-gradient-to-br from-[#A5C0EE] to-[#60A5FA] rounded-[40px] p-7 shadow-lg relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full blur-[30px] translate-x-10 -translate-y-10"></div>
        
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="glass-panel text-[11px] font-bold px-4 py-1.5 rounded-full text-[#111827] flex items-center gap-1.5 border border-white/50">
            <CheckCircle2 size={14} className="text-[#10B981]" strokeWidth={3} />
            {allSigned ? "Stage 7 of 8" : "Stage 6 of 8"}
          </div>
          <div className="glass-panel text-[11px] font-bold px-4 py-1.5 rounded-full flex items-center border border-white/50 text-[#111827]">
            <MapPin size={12} className="mr-1"/> Jubail
          </div>
        </div>
        
        {actionDoc ? (
          <>
            <h2 className="text-[26px] font-bold tracking-tight mb-2 relative z-10 leading-tight text-[#111827]">{actionDoc.title} Ready</h2>
            <p className="text-[14px] text-[#1F2937] mb-8 relative z-10 font-medium">Your Kingdom of Saudi Arabia Labor Law compliant {actionDoc.title.toLowerCase()} is generated.</p>
            <button onClick={() => { setViewingDoc(actionDoc); onNavigate('document_viewer'); }} className="w-full py-4 bg-[#111827] text-white font-semibold rounded-full text-[15px] shadow-[0_8px_20px_rgba(17,24,39,0.3)] hover:bg-gray-800 transition-colors flex items-center justify-center">
              Review & Sign
            </button>
          </>
        ) : allSigned ? (
          <>
            <h2 className="text-[26px] font-bold tracking-tight mb-2 relative z-10 leading-tight text-[#111827]">Visa Processing</h2>
            <p className="text-[14px] text-[#1F2937] mb-8 relative z-10 font-medium">Your Wakala and Work Visa are currently being processed via Enjaz portal.</p>
            <div className="w-full bg-white/40 h-2.5 rounded-full mb-6 overflow-hidden border border-white/50">
               <div className="bg-[#10B981] w-[90%] h-full rounded-full"></div>
            </div>
            <button onClick={() => setActiveTab('tracker')} className="w-full py-4 bg-white text-[#111827] font-semibold rounded-full text-[15px] shadow-md hover:bg-gray-50 transition-colors">
              View Tracker
            </button>
          </>
        ) : (
          <>
            <h2 className="text-[26px] font-bold tracking-tight mb-2 relative z-10 leading-tight text-[#111827]">Document Review</h2>
            <p className="text-[14px] text-[#1F2937] mb-8 relative z-10 font-medium">We are verifying your documents for the Saudi Work Visa.</p>
            <div className="w-full bg-white/40 h-2.5 rounded-full mb-6 overflow-hidden border border-white/50">
              <div className="bg-[#F59E0B] w-[75%] h-full rounded-full"></div>
            </div>
            <button onClick={() => setActiveTab('tasks')} className="w-full py-4 bg-white text-[#111827] font-semibold rounded-full text-[15px] shadow-md hover:bg-gray-50 transition-colors">
              View Tasks
            </button>
          </>
        )}
      </div>

      {/* Actionable Interview Card */}
      <div className="bg-white rounded-[32px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col">
        <div className="flex justify-between items-center mb-4 pl-2 pr-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
              <Video className="text-blue-600" size={20} />
            </div>
            <h3 className="font-bold text-[#111827] text-[16px]">Tech Round</h3>
          </div>
          <span className="text-[11px] font-semibold bg-gray-100 text-[#111827] px-3 py-1.5 rounded-full">Today</span>
        </div>
        <div className="bg-[#F8FAFC] p-4 rounded-[24px] mb-4 flex items-center justify-between border border-gray-100">
           <p className="text-[13px] font-medium text-[#111827] flex items-center"><Calendar size={16} className="mr-2 text-[#6B7280]"/> Oct 24</p>
           <p className="text-[13px] font-medium text-[#111827] flex items-center"><Clock size={16} className="mr-2 text-[#6B7280]"/> 11:00 AM</p>
        </div>
        <button onClick={() => onNavigate('interview')} className="w-full bg-[#111827] text-white font-semibold text-[15px] py-4 rounded-full shadow-md hover:bg-gray-800 transition-colors">
          Join Video Interview
        </button>
      </div>

      {/* Resume Snippet */}
      <div className="bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
        <div className="flex justify-between items-center mb-5">
           <h3 className="font-bold text-[#111827] text-[16px]">Resume</h3>
           <button onClick={() => setActiveTab('profile')} className="text-[#0055FF] bg-blue-50 px-3 py-1 rounded-full text-[11px] font-bold">Update</button>
        </div>
        <div className="space-y-4">
          <div>
             <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mb-1.5">Role & Experience</p>
             <p className="text-[14px] font-medium text-[#111827]">{profileData.jobTitle || 'Senior Technician'} • 8+ Years Exp.</p>
          </div>
          <div>
             <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mb-2.5">Core Skills</p>
             <div className="flex flex-wrap gap-2">
               {['PLC Logic', 'High Voltage', 'Safety Compliance', 'SCADA'].map(skill => (
                 <span key={skill} className="bg-[#F8FAFC] border border-gray-200 text-[#111827] px-3 py-1.5 rounded-full text-[11px] font-semibold">{skill}</span>
               ))}
             </div>
          </div>
          <div className="pt-2">
             <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mb-1.5">Education</p>
             <p className="text-[14px] font-medium text-[#111827]">{profileData.education || 'Diploma in Engineering'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessTrackerTab({ setActiveTab, documents, tasks }) {
  // Compute dynamic states based on app data
  const allDocsSigned = documents.every(d => d.status === 'Signed');
  const medicalTask = tasks.find(t => t.title.includes('Medical'));
  const medicalVerified = medicalTask?.status === 'Verified';

  // Dynamic Timeline Array
  const KSA_TIMELINE = [
    { 
      id: 1, 
      title: 'Application Submitted', 
      status: 'completed', 
      date: 'Oct 12',
      desc: 'Your profile and application were received.'
    },
    { 
      id: 2, 
      title: 'Initial Screening', 
      status: 'completed', 
      date: 'Oct 14',
      desc: 'HR reviewed and shortlisted your profile.'
    },
    { 
      id: 3, 
      title: 'Final HR Interview', 
      status: 'completed', 
      date: 'Oct 24',
      desc: 'Technical and HR interviews cleared successfully.'
    },
    { 
      id: 4, 
      title: 'Offer & Acceptance', 
      status: allDocsSigned ? 'completed' : 'active', 
      date: allDocsSigned ? 'Oct 25' : 'Action Required', 
      desc: 'Review and sign Kingdom of Saudi Arabia labor contract.',
      actionBtn: !allDocsSigned ? { label: 'Review Documents', tab: 'tasks' } : null
    },
    { 
      id: 5, 
      title: 'GAMCA Medical', 
      status: !allDocsSigned ? 'upcoming' : (medicalVerified ? 'completed' : 'active'), 
      date: medicalVerified ? 'Oct 28' : 'Pending',
      desc: 'Complete medical fitness test at approved GAMCA center.',
      actionBtn: (!allDocsSigned || medicalVerified) ? null : { label: 'Upload Report', tab: 'tasks' }
    },
    { 
      id: 6, 
      title: 'Wakala & Visa Stamping', 
      status: (!allDocsSigned || !medicalVerified) ? 'upcoming' : 'active', 
      date: 'Pending', 
      desc: 'Processed via Enjaz portal by our agency.' 
    },
    { 
      id: 7, 
      title: 'Deployment to Kingdom of Saudi Arabia', 
      status: 'upcoming', 
      date: 'Pending',
      desc: 'Flight tickets and final joining instructions.'
    }
  ];

  return (
    <div className="px-5 animate-in fade-in duration-300 pt-14">
      <div className="mb-8">
        <h1 className="text-[26px] font-bold tracking-tight text-[#111827]">Tracker</h1>
        <p className="text-[14px] font-medium text-[#4B5563] mt-1">ITL deployment Flow</p>
      </div>
      <div className="bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
        <div className="relative border-l-[2px] border-gray-100 ml-4 space-y-8 pb-4 mt-2">
          {KSA_TIMELINE.map((stage) => {
            const isCompleted = stage.status === 'completed';
            const isActive = stage.status === 'active';
            
            return (
              <div key={stage.id} className={`relative pl-8 ${stage.status === 'upcoming' ? 'opacity-60' : 'opacity-100'}`}>
                {/* Status Indicator Node */}
                <div className={`absolute -left-[10px] top-0 w-5 h-5 rounded-full ring-4 ring-white flex items-center justify-center shadow-sm ${isCompleted ? 'bg-[#10B981]' : isActive ? 'bg-[#0055FF] ring-blue-50' : 'bg-gray-200'}`}>
                  {isCompleted && <Check size={12} className="text-white stroke-[3]" />}
                  {isActive && <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>}
                </div>
                
                {/* Content */}
                <div className="-mt-1.5">
                  <div className="flex flex-col mb-1.5">
                    <h3 className={`text-[15px] font-semibold ${isCompleted ? 'text-[#111827]' : isActive ? 'text-[#0055FF]' : 'text-[#6B7280]'}`}>{stage.title}</h3>
                    <span className={`text-[11px] font-bold mt-0.5 ${isActive ? 'text-[#0055FF] uppercase tracking-widest' : 'text-[#6B7280]'}`}>{stage.date}</span>
                  </div>
                  
                  {/* Stage Description */}
                  <p className={`text-[12px] leading-relaxed ${isActive ? 'text-[#111827] font-medium' : 'text-[#6B7280]'}`}>
                    {stage.desc}
                  </p>

                  {/* Smart Action Button for Active Stage */}
                  {isActive && stage.actionBtn && (
                    <button 
                      onClick={() => setActiveTab(stage.actionBtn.tab)}
                      className="mt-3 bg-[#111827] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-full hover:bg-gray-800 transition-colors shadow-md flex items-center gap-1.5"
                    >
                      {stage.actionBtn.label} <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MessagesTab() {
  const chatHistory = [
    { type: 'received', text: "Hello! Welcome to ITL. I'm Sarah, your HR Coordinator.", time: "10:00 AM" },
    { type: 'sent', text: "Hi Sarah! I have a question about my document verification status.", time: "10:02 AM", read: true },
    { type: 'received', text: "Of course! We're still waiting for your Medical Fitness Certificate.", time: "10:03 AM" },
    { type: 'sent', text: "Where should I get it?", time: "10:05 AM", read: true },
    { type: 'received', text: "Any GAMCA-approved medical center. I'll send the list.", time: "10:06 AM" }
  ];

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] animate-in fade-in duration-300 relative">
      <div className="bg-white px-5 pt-14 pb-4 flex items-center gap-4 shadow-sm z-20 shrink-0">
        <div className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xl shadow-md shrink-0">
          S
        </div>
        <div>
          <h2 className="text-[#111827] font-bold tracking-tight text-[17px] leading-tight">Sarah Ahmed</h2>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
            <span className="text-[#4B5563] text-[12px] font-medium tracking-wide">
              Online Coordinator
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5 hide-scrollbar">
        {chatHistory.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 shadow-sm relative ${
              msg.type === 'sent' 
                ? 'bg-[#111827] text-white rounded-t-[24px] rounded-bl-[24px] rounded-br-sm' 
                : 'bg-white border border-gray-100 text-[#111827] rounded-t-[24px] rounded-br-[24px] rounded-bl-sm'
            }`}>
              <p className="text-[14px] font-medium leading-relaxed">{msg.text}</p>
              <div className={`flex items-center justify-end gap-1 mt-2 ${msg.type === 'sent' ? 'text-gray-400' : 'text-[#6B7280]'}`}>
                <span className="text-[10px] font-semibold">{msg.time}</span>
                {msg.type === 'sent' && <CheckCheck size={14} className="text-blue-400" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white px-4 pt-3 pb-[90px] border-t border-gray-100 flex items-center gap-3 z-20 shrink-0">
        <button className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-gray-500 shrink-0">
          <Paperclip size={20} />
        </button>
        <input 
          type="text" 
          placeholder="Message..." 
          className="flex-1 bg-gray-50 rounded-full px-5 py-3.5 text-[14px] font-medium text-[#111827] focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-[#6B7280]" 
        />
        <button className="w-12 h-12 rounded-full bg-[#111827] text-white flex items-center justify-center shadow-md hover:bg-gray-800 transition-colors shrink-0">
          <Send size={18} className="ml-0.5" />
        </button>
      </div>
    </div>
  );
}

function ProfileTab({ onNavigate, profileData, setProfileData, showToast, generatedId }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(profileData);
  const fileInputRef = React.useRef(null);

  const handleEditToggle = () => {
    if (isEditing) { setEditData(profileData); setIsEditing(false); } 
    else { setIsEditing(true); }
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    showToast('Profile updated successfully!', 'success');
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData(prev => ({ ...prev, photo: reader.result }));
        showToast('Official photo proof updated!', 'success');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col animate-in fade-in duration-300">
      <div className="bg-gradient-to-b from-[#2C5795] to-[#31A6A1] pt-16 pb-10 px-6 rounded-b-[48px] relative z-0 shadow-lg">
        <h1 className="text-[24px] font-bold text-white mb-6">Profile</h1>
        <div className="flex items-center gap-5">
          <div className="relative shrink-0">
            <div className="w-20 h-20 bg-white text-[#111827] rounded-full flex items-center justify-center text-[32px] font-bold shadow-md overflow-hidden border-2 border-white/50">
              {profileData.photo ? (
                <img src={profileData.photo} alt="Profile Proof" className="w-full h-full object-cover" />
              ) : (
                profileData.fullName.charAt(0) || 'A'
              )}
            </div>
            <button 
              onClick={() => fileInputRef.current.click()}
              className="absolute bottom-0 right-0 w-7 h-7 bg-[#111827] border-2 border-white rounded-full flex items-center justify-center text-white shadow-sm hover:bg-gray-800 transition-colors"
            >
              <Camera size={12} />
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handlePhotoUpload} 
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[18px] font-bold text-white leading-tight">{profileData.fullName || 'User'}</h2>
            <p className="text-[13px] font-medium text-white/80 mt-1">ID: {generatedId || 'ITL-83749201'}</p>
            <div className="flex items-center gap-1.5 mt-2 bg-white/20 px-3 py-1 rounded-full w-fit border border-white/30 shadow-sm">
              <ShieldCheck size={12} className="text-white" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Official Photo Proof</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-6 space-y-5 relative z-10 pb-10">
        <div className="bg-white rounded-[32px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
            <h3 className="font-bold text-[#111827] text-[15px]">Personal Info</h3>
            <button onClick={handleEditToggle} className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#111827] hover:bg-gray-100">
              {isEditing ? <X size={16} /> : <Edit3 size={16} />}
            </button>
          </div>
          
          <div className="px-6 py-5 space-y-4">
            <ProfileRow label="Full Name" field="fullName" value={profileData.fullName} isEditing={isEditing} editData={editData} setEditData={setEditData} />
            <ProfileRow label="Phone" field="phone" value={profileData.phone} type="tel" isEditing={isEditing} editData={editData} setEditData={setEditData} />
            <ProfileRow label="Email" field="email" value={profileData.email} type="email" isEditing={isEditing} editData={editData} setEditData={setEditData} />
            <ProfileRow label="Date of Birth" field="dob" value={profileData.dob} type="date" isEditing={isEditing} editData={editData} setEditData={setEditData} />
            <ProfileRow label="Nationality" field="nationality" value={profileData.nationality} isEditing={isEditing} editData={editData} setEditData={setEditData} />
            <ProfileRow label="Education" field="education" value={profileData.education} isEditing={isEditing} editData={editData} setEditData={setEditData} />
            <ProfileRow label="Languages" field="languages" value={profileData.languages} isEditing={isEditing} editData={editData} setEditData={setEditData} />
            <ProfileRow label="Gender" field="gender" value={profileData.gender} isEditing={isEditing} editData={editData} setEditData={setEditData} options={["Male", "Female"]} />
            <ProfileRow label="Marital Status" field="maritalStatus" value={profileData.maritalStatus} isEditing={isEditing} editData={editData} setEditData={setEditData} options={["Single", "Married"]} />
            <ProfileRow label="Emergency Contact" field="emergencyContact" value={profileData.emergencyContact} type="tel" isEditing={isEditing} editData={editData} setEditData={setEditData} />
          </div>

          {isEditing && (
            <div className="px-6 pb-6 pt-2">
              <button onClick={handleSave} className="w-full py-4 bg-[#111827] text-white font-semibold rounded-full text-[15px] shadow-lg hover:bg-gray-800 transition-colors">
                Save Changes
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-[32px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-50">
            <h3 className="font-bold text-[#111827] text-[15px]">Compliance</h3>
          </div>
          <div className="px-6 py-5 space-y-4">
            <ProfileRow label="Passport Number" value={profileData.passportNumber || "A12345678"} />
            <ProfileRow label="Passport Expiry" value="2028-06-15" warning />
            <ProfileRow label="Visa Status" value="Processing" />
            <ProfileRow label="Agency" value="ITL Direct" />
          </div>
        </div>

        {/* Sign Out Button */}
        <div className="pt-2">
           <button 
             onClick={() => onNavigate('login')} 
             className="w-full py-4 bg-[#FEE2E2] text-[#EF4444] font-bold rounded-full text-[15px] shadow-sm hover:bg-red-200 transition-colors flex items-center justify-center gap-2"
           >
             <LogOut size={18} strokeWidth={2.5} /> Sign Out
           </button>
        </div>
      </div>
    </div>
  );
}

// --- DOCUMENT VIEWER AND INTERVIEW ---
function DocumentViewer({ doc, onNavigate, onSign }) {
  if (!doc) return null;
  return (
    <div className="h-full w-full bg-[#F8FAFC] flex flex-col pt-14 pb-8 relative z-30">
      <div className="px-4 py-3 bg-white flex items-center justify-between shadow-sm rounded-b-[24px]">
        <button onClick={() => onNavigate('main')} className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-[#111827]"><ChevronLeft size={20} /></button>
        <h2 className="text-[15px] font-bold text-[#111827] truncate max-w-[200px] tracking-tight">{doc.title}</h2>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-[#111827]"><Download size={18} /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-5 hide-scrollbar">
        <div className="bg-white rounded-[32px] shadow-sm p-8 min-h-[600px] text-[13.5px] text-gray-700 leading-relaxed border border-gray-100">
          
          {/* Elegant Serif Header mirroring the reference image style */}
          <div className="mb-8 border-b border-gray-100 pb-6">
            <h1 className="text-[36px] font-bold tracking-tight text-[#111827] font-serif leading-none mb-2">ITL Saudi Arabia.</h1>
            <h2 className="text-[18px] text-[#0055FF] font-serif italic font-medium">{doc.title}</h2>
          </div>

          <p className="mb-5">Dear <strong className="font-semibold text-[#111827]">Ahmed Al-Rashid</strong>,</p>
          <p className="mb-6 text-justify leading-loose">We offer you employment in the position of <strong className="font-semibold text-[#111827]">Senior Plant Technician</strong> for the Refinery project. Made in accordance with Kingdom of Saudi Arabia Labor Law.</p>
          
          <div className="bg-gray-50 p-5 rounded-[24px] mb-8 border border-gray-100">
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#0055FF] rounded-full mt-2 shrink-0"></span><span><strong className="text-[#111827] font-semibold">Basic Salary:</strong> SAR 4,500 / month.</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#0055FF] rounded-full mt-2 shrink-0"></span><span><strong className="text-[#111827] font-semibold">Working Hours:</strong> 8 hours / day, 6 days / week.</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#0055FF] rounded-full mt-2 shrink-0"></span><span><strong className="text-[#111827] font-semibold">Annual Leave:</strong> 21 days paid leave.</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#0055FF] rounded-full mt-2 shrink-0"></span><span><strong className="text-[#111827] font-semibold">Medical Insurance:</strong> Provided.</span></li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="font-bold text-[#111827] mb-4 text-[14px]">Acceptance</h3>
            {doc.status === 'Signed' ? (
              <div className="flex items-center gap-4 p-5 bg-[#D1FAE5] rounded-[24px]">
                <CheckCircle2 size={24} className="text-[#10B981]" />
                <div>
                  <p className="text-[14px] font-bold text-[#111827]">Digitally Signed</p>
                  <p className="text-[11px] font-medium text-[#10B981] mt-0.5">{new Date().toLocaleString()}</p>
                </div>
              </div>
            ) : (
              <p className="text-[12px] text-gray-500 mb-6 font-medium">By clicking "Sign" below, you legally confirm acceptance of these terms.</p>
            )}
          </div>
        </div>
      </div>
      {doc.status !== 'Signed' && doc.status === 'Action Required' && (
        <div className="bg-transparent px-5 pb-10">
           <button onClick={onSign} className="w-full py-4 bg-[#111827] text-white rounded-full font-bold text-[15px] shadow-[0_8px_20px_rgba(17,24,39,0.2)] flex justify-center items-center">
             Sign Document
           </button>
        </div>
      )}
    </div>
  );
}

function ActiveInterviewScreen({ onNavigate, showToast }) {
  const handleEndCall = () => {
    showToast('Interview completed.', 'success');
    onNavigate('main');
  };
  return (
    <div className="h-full w-full bg-[#111827] flex flex-col relative z-50">
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#111827] flex items-center justify-center">
          <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center animate-pulse">
            <User size={60} className="text-white/20" />
          </div>
        </div>
        
        <div className="absolute top-16 right-5 w-24 h-36 bg-[#1E293B] rounded-[24px] shadow-2xl z-10 flex items-center justify-center border border-white/10">
          <User size={36} className="text-white/20" />
        </div>
        
        <div className="absolute bottom-32 text-center w-full z-10">
          <h2 className="text-white text-[24px] font-bold tracking-tight drop-shadow-lg">Sarah Jenkins</h2>
          <p className="text-gray-400 text-[13px] font-medium mt-1">HR Manager - ITL Kingdom of Saudi Arabia</p>
        </div>
      </div>
      <div className="h-32 px-8 flex items-center justify-between pb-8 bg-gradient-to-t from-black/50 to-transparent relative z-10">
        <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white"><Mic size={22} /></button>
        <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white"><Camera size={22} /></button>
        <button onClick={handleEndCall} className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white shadow-[0_4px_20px_rgba(239,68,68,0.4)]">
          <Phone size={24} className="rotate-[135deg]" />
        </button>
      </div>
    </div>
  );
}

// --- FLOATING PILL BOTTOM NAVIGATION ---
function BottomNavBar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'dashboard', icon: Home, label: 'Home' },
    { id: 'tracker', icon: MapPin, label: 'Tracker' },
    { id: 'tasks', icon: FileText, label: 'Docs' },
    { id: 'messages', icon: MessageSquare, label: 'Chat' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="absolute bottom-6 left-5 right-5 z-40">
      <div className="bg-white/90 backdrop-blur-xl rounded-full px-2 py-2.5 flex justify-between items-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          
          if (tab.id === 'tasks') {
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="flex flex-col items-center justify-center w-14 h-14 bg-[#111827] rounded-full shadow-md transform -translate-y-2">
                <Icon size={20} className="text-white mb-0.5" strokeWidth={2.5} />
                <span className="text-[9px] font-bold text-white tracking-wide">{tab.label}</span>
              </button>
            )
          }

          return (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="flex flex-col items-center justify-center w-[18%]">
              <Icon size={20} className={`mb-1 transition-colors ${isActive ? 'text-[#111827]' : 'text-gray-400'}`} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[9px] font-semibold transition-colors tracking-wide ${isActive ? 'text-[#111827]' : 'text-gray-400'}`}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}