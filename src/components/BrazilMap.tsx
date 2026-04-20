
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { highlightedStates } from '../data/legends';

interface BrazilMapProps {
  onStateClick: (stateName: string) => void;
  selectedState: string | null;
}

export default function BrazilMap({ onStateClick, selectedState }: BrazilMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [geoData, setGeoData] = useState<any>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/codeforamerica/click_that_hood@master/public/data/brazil-states.geojson')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setGeoData(data))
      .catch(err => {
        console.error('Error loading GeoJSON:', err);
        setError('无法加载地图数据，请检查网络连接。');
      });
  }, []);

  useEffect(() => {
    if (!geoData || !svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('*').remove();

    const projection = d3.geoMercator()
      .scale(width < 600 ? width * 1.2 : 750)
      .center([-55, -15])
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    const colorMap: Record<string, string> = {
      'Amazonas': '#2d5a27',
      'Maranhão': '#bc6c25',
      'Bahia': '#da4167',
      'Minas Gerais': '#dda15e',
      'São Paulo': '#606c38'
    };

    const states = svg.append('g')
      .selectAll('path')
      .data(geoData.features)
      .enter()
      .append('path')
      .attr('d', path as any)
      .attr('class', (d: any) => {
        const name = d.properties.name;
        return `state cursor-pointer transition-all duration-300 ${highlightedStates.includes(name) ? 'hover:brightness-95' : 'opacity-40'}`;
      })
      .attr('fill', (d: any) => {
        const name = d.properties.name;
        return colorMap[name] || '#fefae0';
      })
      .attr('stroke', (d: any) => {
        const name = d.properties.name;
        if (highlightedStates.includes(name)) return '#1c1917';
        return '#d6d3d1';
      })
      .attr('stroke-width', (d: any) => {
        const name = d.properties.name;
        if (highlightedStates.includes(name)) return 1.5;
        return 0.5;
      })
      .on('click', (event, d: any) => {
        const name = d.properties.name;
        if (highlightedStates.includes(name)) {
          onStateClick(name);
        }
      });

    // Add labels for highlighted states
    svg.append('g')
      .selectAll('text')
      .data(geoData.features.filter((f: any) => highlightedStates.includes(f.properties.name)))
      .enter()
      .append('text')
      .attr('transform', (d: any) => `translate(${path.centroid(d)})`)
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .attr('class', 'pointer-events-none fill-white font-bold text-[8px] sm:text-[10px] uppercase tracking-tighter')
      .text((d: any) => d.properties.name);

  }, [geoData, onStateClick, selectedState]);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-center px-6">
        <p className="text-rose-500 font-bold">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 border border-line rounded-lg text-xs hover:bg-stone-50 transition-colors"
        >
          重试加载
        </button>
      </div>
    );
  }

  if (!geoData) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-accent-gold/20 border-t-accent-gold rounded-full animate-spin" />
        <p className="text-stone-400 font-serif tracking-widest animate-pulse uppercase">Carregando Mapa...</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center p-4">
      <svg ref={svgRef} className="max-w-full max-h-full overflow-visible" />
    </div>
  );
}
