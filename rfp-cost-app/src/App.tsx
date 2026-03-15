import { useState, useMemo } from 'react';
import { Search, Info, HelpCircle, FileText, CheckCircle } from 'lucide-react';
import { costMapping } from './data/costMapping';
import type { CostItem } from './data/costMapping';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    return costMapping.filter(item => 
      item.subCategory.includes(searchTerm) || 
      item.category.includes(searchTerm) ||
      item.targetDescription.includes(searchTerm)
    );
  }, [searchTerm]);

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1><FileText size={32} /> 기금사업 사업비 산정 가이드</h1>
          <p>비용 항목을 입력하여 비목과 세목을 확인하세요.</p>
        </div>
      </header>

      <main className="main">
        <div className="search-container">
          <div className="search-box">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="예: 사무용품, 회의비, 출장비, 인건비..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
        </div>

        <div className="content">
          {searchTerm.trim() === '' ? (
            <div className="empty-state">
              <HelpCircle size={48} />
              <h3>검색어를 입력해 주세요</h3>
              <p>기금사업 사업비 산정 지침에 따른 분류를 실시간으로 찾아드립니다.</p>
            </div>
          ) : filteredResults.length > 0 ? (
            <div className="results-grid">
              {filteredResults.map(item => (
                <div key={item.id} className="result-card">
                  <div className="card-header">
                    <span className="category-badge">{item.category}</span>
                    <h3 className="sub-category">{item.subCategory}</h3>
                  </div>
                  <div className="card-body">
                    <div className="info-section">
                      <h4><CheckCircle size={16} /> 적용 대상</h4>
                      <p>{item.targetDescription}</p>
                    </div>
                    <div className="info-section">
                      <h4><Info size={16} /> 산정 기준</h4>
                      <p>{item.calculationStandard}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>"{searchTerm}"에 대한 검색 결과가 없습니다.</p>
              <span>다른 검색어를 시도해 보세요.</span>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 RFP Cost Analysis Tool - 기금사업 사업비 산정 및 정산 등에 관한 지침 준수</p>
      </footer>
    </div>
  );
}

export default App;
