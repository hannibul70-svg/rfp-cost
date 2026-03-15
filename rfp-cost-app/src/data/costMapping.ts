export interface CostItem {
  id: string;
  category: string; // 비목
  subCategory: string; // 세목
  targetDescription: string; // 적용대상 (keywords/synonyms)
  calculationStandard: string; // 산정 기준
}

export const costMapping: CostItem[] = [
  // 인건비
  {
    id: '1',
    category: '인건비',
    subCategory: '보수',
    targetDescription: '정규직 인건비, 급여, 상여금, 퇴직금, 4대보험, 연봉, 월급',
    calculationStandard: '인건비 계상률 100% 초과 금지, 연봉 총액 기준'
  },
  {
    id: '2',
    category: '인건비',
    subCategory: '상용임금',
    targetDescription: '계약직, 일반계약직, 전문계약직, 무기계약직, 상용직 인건비',
    calculationStandard: '인건비 계상률 100% 초과 금지'
  },
  {
    id: '3',
    category: '인건비',
    subCategory: '일용임금',
    targetDescription: '기간제, 위촉직, 아르바이트, 강사료, 일용직 인건비',
    calculationStandard: '필수 소요 인원 기준 산정, 최저임금법 준수'
  },
  // 운영비
  {
    id: '4',
    category: '운영비',
    subCategory: '일반수용비',
    targetDescription: '사무용품비, 인쇄비, 홍보물, 책자, 소모성 물품, 간행물, 비품 수선, 업무위탁, 수수료, 사례금, 번역료, 수당, 자문료, 전문가 활용비, 회의참석비, 공고료, 광고료, 소모성 재료비',
    calculationStandard: '실제 소요 비용 기준'
  },
  {
    id: '5',
    category: '운영비',
    subCategory: '공공요금 및 제세',
    targetDescription: '통신비, 전화요금, 우편요금, 수도료, 전기료, 회선사용료, 클라우드 서비스 이용료, 보험료, 제세공과금',
    calculationStandard: '월 사용료 등 실제 납부 금액 기준'
  },
  {
    id: '6',
    category: '운영비',
    subCategory: '특근매식비',
    targetDescription: '야근 식대, 시간외 근무 식비, 야간 근무 식비, 휴일 근무 식비',
    calculationStandard: '정규근무시간 2시간 전/후 근무 시 지급'
  },
  {
    id: '7',
    category: '운영비',
    subCategory: '임차료',
    targetDescription: '건물 임차료, 장소 임대, 장비 임차, 클라우드 서비스(ASP), 소프트웨어 라이선스 임차, 리스료',
    calculationStandard: '임대차 계약서 및 실제 단가 기준'
  },
  {
    id: '8',
    category: '운영비',
    subCategory: '재료비',
    targetDescription: '시약, 시료, 소모성 재료, 데이터셋 구입, 가공대상 데이터 구입',
    calculationStandard: '실소요 비용 산정'
  },
  {
    id: '9',
    category: '운영비',
    subCategory: '시설장비유지비',
    targetDescription: '건물 유지비, 장비 수리, 공구 수리, 유지보수, 청소, 경비(자체 운영 시)',
    calculationStandard: '유지보수 계약 또는 실제 수리비'
  },
  {
    id: '10',
    category: '운영비',
    subCategory: '유류비',
    targetDescription: '차량 유류비, 기름값, 유류 유지비, 업무용 차량 주유',
    calculationStandard: '실제 주행 거리 또는 고정 정액 기준'
  },
  {
    id: '11',
    category: '운영비',
    subCategory: '복리후생비',
    targetDescription: '동호회, 건강검진, 명절 선물, 생일 기념품, 의약품 구입, 상조회 지원',
    calculationStandard: '내부 규정 또는 복리후생 기준'
  },
  {
    id: '12',
    category: '운영비',
    subCategory: '일반용역비',
    targetDescription: '행사 운영 대행, 이벤트 대행, 시스템 유지관리 대행, 민간위탁 용역',
    calculationStandard: '예정가격 산정 기준'
  },
  {
    id: '13',
    category: '운영비',
    subCategory: '관리용역비',
    targetDescription: '청소 용역, 경비 용역, 시설관리 용역, 외부 위탁 관리',
    calculationStandard: '용역 계약 기준'
  },
  // 여비
  {
    id: '14',
    category: '여비',
    subCategory: '국내여비',
    targetDescription: '국내 출장, 출장비, 숙박비, 식비, 교통비, KTX, 버스비',
    calculationStandard: '공무원 여비 규정 또는 자체 기준'
  },
  {
    id: '15',
    category: '여비',
    subCategory: '국외여비',
    targetDescription: '해외 출장, 국외 출장, 항공료, 체재비, 해외 항공권',
    calculationStandard: '공무원 여비 규정 기준'
  },
  // 업무추진비
  {
    id: '16',
    category: '업무추진비',
    subCategory: '사업추진비',
    targetDescription: '회의비, 간담회 식대, 업무 추진비, 다과비, 접대비(사업 관련)',
    calculationStandard: '1인당 단가 기준(예: 3만원 이하)'
  },
  // 직무수행경비
  {
    id: '17',
    category: '직무수행경비',
    subCategory: '직책수행경비',
    targetDescription: '직책 수당, 보직 수당, 직무 수행 지원비',
    calculationStandard: '직위에 따른 정액 지급'
  },
  // 연구용역비
  {
    id: '18',
    category: '연구용역비',
    subCategory: '일반연구비',
    targetDescription: '학술 연구, 정책 연구, 기술 연구, R&D 용역',
    calculationStandard: '연구용역 계약 기준'
  },
  // 유형자산
  {
    id: '19',
    category: '유형자산',
    subCategory: '자산취득비',
    targetDescription: '컴퓨터 구입, 노트북 구입, 서버 구입, 가구 구입, 비품 구입, 장비 취득, 소프트웨어 구입(영구)',
    calculationStandard: '취득 가액 기준'
  },
  // 민간이전
  {
    id: '20',
    category: '민간이전',
    subCategory: '민간경상보조',
    targetDescription: '보조금, 민간 보조, 경상 지원',
    calculationStandard: '보조금 산정 기준'
  },
  {
    id: '21',
    category: '민간이전',
    subCategory: '민간위탁사업비',
    targetDescription: '위탁 사업비, 위탁비, 민간 위탁',
    calculationStandard: '위탁 계약 기준'
  },
  {
    id: '22',
    category: '민간이전',
    subCategory: '민간자본보조',
    targetDescription: '자본 보조, 인프라 구축 지원, 설비 투자 지원',
    calculationStandard: '자본 형성 지원 기준'
  }
];
